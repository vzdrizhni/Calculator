import React from 'react'
import PropTypes from 'prop-types'

const Button = (props) => (
        <button type="button" className={`${props.wide}-button-${props.color}`}>{props.button}</button>
)

Button.propTypes = {
        button: PropTypes.string.isRequired,
        wide: PropTypes.bool.isRequired,
        color: PropTypes.string
}

Button.defaultProps = {
        color: 'orange',
}

export default Button