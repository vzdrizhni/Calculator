import React from 'react'

const Button = (props) => (
    <div className='button-container'>
        <div className='button-group'>{props.buttonGroup.map(button => (
            <button>{button}</button>
            ))}
        </div>
    </div>
)

export default Button