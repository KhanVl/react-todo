import React, { useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'

function Task({ id, title, completed, createdAt, onToggle, onDelete, onEditTitle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(title)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus()
  }, [isEditing])

  const createdLabel = format(createdAt, 'PPpp') // «created X minutes ago» — позже

  const startEdit = () => {
    setDraft(title)
    setIsEditing(true)
  }
  const confirmEdit = () => {
    if (draft.trim()) onEditTitle(id, draft)
    setIsEditing(false)
  }
  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      confirmEdit()
    } else if (e.key === 'Escape') {
      setIsEditing(false)
      setDraft(title)
    }
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
            <span className="created">{createdLabel}</span>
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

export default Task