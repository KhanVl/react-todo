import React, { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm({ onAddTask }) {
  const [value, setValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const v = value.trim()
    if (!v) return
    onAddTask(v)
    setValue('')
  }

  return (
    <form className="new-todo-form" onSubmit={handleSubmit}>
      <div className="input-row">
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="btn-add">Add</button>
      </div>
    </form>
  )
}
NewTaskForm.propTypes = { onAddTask: PropTypes.func }
NewTaskForm.defaultProps = { onAddTask: () => {} }

export default NewTaskForm