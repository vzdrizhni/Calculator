import React from 'react'
import PropTypes from 'prop-types'



const Button = (props) => {

        const handleClick = () => {
                props.clickHandler(props.button);
        }

        return(
                <button type="button" className={`${props.wide}-button-${props.color}`} onClick={handleClick}>{props.button}</button>
        )
}

Button.propTypes = {
        button: PropTypes.string.isRequired,
        wide: PropTypes.bool.isRequired,
        color: PropTypes.string
}

Button.defaultProps = {
        color: 'orange',
}

export default Button