import React from 'react'
import PropTypes from 'prop-types'
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

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    completed: PropTypes.bool,
    createdAt: PropTypes.instanceOf(Date).isRequired
  })),
  onToggle: PropTypes.func,
  onDelete: PropTypes.func,
  onEditTitle: PropTypes.func
}
TaskList.defaultProps = {
  tasks: [],
  onToggle: () => {},
  onDelete: () => {},
  onEditTitle: () => {}
}

export default TaskList