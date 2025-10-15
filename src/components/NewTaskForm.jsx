import React from 'react'

function NewTaskForm({ onAddTask }) {
  return (
    <form className="new-todo-form" onSubmit={(e) => e.preventDefault()}>
      <input className="new-todo" placeholder="What needs to be done?" autoFocus />
      <button type="submit" className="hidden">
        Add
      </button>
    </form>
  )
}

export default NewTaskForm
