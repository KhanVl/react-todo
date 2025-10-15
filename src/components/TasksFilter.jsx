import React from 'react'

function TasksFilter({ value, onChange }) {
  return (
    <ul className="filters">
      <li><button className={value === 'all' ? 'selected' : ''} onClick={() => onChange('all')}>All</button></li>
      <li><button className={value === 'active' ? 'selected' : ''} onClick={() => onChange('active')}>Active</button></li>
      <li><button className={value === 'completed' ? 'selected' : ''} onClick={() => onChange('completed')}>Completed</button></li>
    </ul>
  )
}
export default TasksFilter