import React, { useState } from 'react'

function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onAddTask(value)
    setValue('')
  }

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="visually-hidden">Add</button>
    </form>
  )
}

export default NewTaskForm