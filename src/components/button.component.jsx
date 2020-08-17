import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
        <button>{props.button}</button>
)

Button.propTypes = {
        button: PropTypes.string.isRequired
}

export default Button