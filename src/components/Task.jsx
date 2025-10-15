import React, { useState, useRef, useEffect } from 'react'
import { format } from 'date-fns'

function Task({ id, title, completed, createdAt, onToggle, onDelete, onEditTitle }) {
  const [isEditing, setIsEditing] = useState(false)
  const [draft, setDraft] = useState(title)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isEditing && inputRef.current) inputRef.current.focus()
  }, [isEditing])

  const createdLabel = format(createdAt, 'PPpp') 

  const handleEditStart = () => {
    setDraft(title)
    setIsEditing(true)
  }

  const handleEditConfirm = () => {
    if (draft.trim()) onEditTitle(id, draft)
    setIsEditing(false)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleEditConfirm()
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

        {!isEditing ? (
          <label onDoubleClick={handleEditStart}>
            <span className="description">{title}</span>
            <span className="created">{createdLabel}</span>
          </label>
        ) : null}

        <button className="icon icon-edit" aria-label="edit" onClick={handleEditStart} />
        <button className="icon icon-destroy" aria-label="delete" onClick={() => onDelete(id)} />
      </div>

      {isEditing && (
        <input
          ref={inputRef}
          className="edit"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={() => setIsEditing(false)}
        />
      )}
    </li>
  )
}

export default Task