import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

function Task({ id, title, completed, createdAt, onToggle, onDelete, onEditTitle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(title)
  const inputRef = useRef(null)
  const [, forceTick] = useState(0) 

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus()
  }, [isEditing])

  useEffect(() => {
    const id = setInterval(() => forceTick(x => x + 1), 30_000)
    return () => clearInterval(id)
  }, [])

  const startEdit = () => {
    setDraft(title)
    setIsEditing(true)
  }
  const confirmEdit = () => {
    const t = draft.trim()
    if (t) onEditTitle(id, t)
    setIsEditing(false)
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') { e.preventDefault(); confirmEdit() }
    if (e.key === 'Escape') { setIsEditing(false); setDraft(title) }
  }

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => onToggle(id)}
        />

        {!isEditing && (
          <label onDoubleClick={startEdit}>
            <span className="description">{title}</span>
            <span className="created">
              {`created ${formatDistanceToNow(createdAt, { addSuffix: true })}`}
            </span>
          </label>
        )}

        <button className="icon icon-edit" aria-label="edit" onClick={startEdit} />
        <button className="icon icon-destroy" aria-label="delete" onClick={() => onDelete(id)} />
      </div>

      {isEditing && (
        <input
          ref={inputRef}
          className="edit"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={onKeyDown}
          onBlur={() => setIsEditing(false)}
        />
      )}
    </li>
  )
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  completed: PropTypes.bool,
  createdAt: PropTypes.instanceOf(Date).isRequired,
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEditTitle: PropTypes.func
}
Task.defaultProps = {
  title: '',
  completed: false,
  onToggle: () => {},
  onDelete: () => {},
  onEditTitle: () => {}
}

export default Task