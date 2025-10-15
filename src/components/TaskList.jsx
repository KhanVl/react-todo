import React from 'react'
import Task from './Task'

function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((t) => (
        <Task
          key={t.id}
          id={t.id}
          title={t.title}
          completed={t.completed}
          createdAt={t.createdAt}
        />
      ))}
    </ul>
  )
}

export default TaskList
