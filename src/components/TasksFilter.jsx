import React from 'react'

function TasksFilter({ value, onChange }) {
  return (
    <ul className="filters">
      <li><a href="#/" className={value === 'all' ? 'selected' : ''}>All</a></li>
      <li><a href="#/active" className={value === 'active' ? 'selected' : ''}>Active</a></li>
      <li><a href="#/completed" className={value === 'completed' ? 'selected' : ''}>Completed</a></li>
    </ul>
  )
}

export default TasksFilter