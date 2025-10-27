import React from 'react'
import PropTypes from 'prop-types'

function Footer({ onClearCompleted }) {
  return (
    <button className="clear-completed" onClick={onClearCompleted}>
      Clear completed
    </button>
  )
}

Footer.propTypes = { onClearCompleted: PropTypes.func }
Footer.defaultProps = { onClearCompleted: () => {} }

export default Footer