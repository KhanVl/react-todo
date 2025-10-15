import React from 'react'

function Footer({ onClearCompleted }) {
  return (
    <button className="clear-completed" onClick={onClearCompleted}>
      Clear completed
    </button>
  )
}

export default Footer