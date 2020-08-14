import React from 'react'

const Button = (props) => (
    <div className='button-container'>
        {props.buttonGroup.map(button => (
            <button type='button' key={button.toString()}>{button}</button>
            ))}
    </div>
)

export default Button