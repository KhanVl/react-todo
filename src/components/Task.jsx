import React from 'react'
import { format } from 'date-fns'

function Task({ id, title, completed, createdAt }) {
  const createdLabel = format(createdAt, 'PPpp')

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} readOnly />
        <label>
          <span className="description">{title}</span>
          <span className="created">{createdLabel}</span>
        </label>
        <button className="icon icon-edit" aria-label="edit" />
        <button className="icon icon-destroy" aria-label="delete" />
      </div>

      {}
      <input type="text" className="edit" defaultValue={title} />
    </li>
  )
}

export default Task