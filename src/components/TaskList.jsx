import React from 'react'
import Task from './Task.jsx'

function TaskList({ tasks, onToggle, onDelete, onEditTitle }) {
  return (
    <ul className="todo-list">
      {tasks.map(t => (
        <Task
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          createdAt={t.createdAt}
          onToggle={onToggle}
          onDelete={onDelete}
          onEditTitle={onEditTitle}
        />
      ))}
    </ul>
  )
}

export default TaskList