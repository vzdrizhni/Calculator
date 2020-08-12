import React from 'react'
import Button from './button.component'

const ButtonPanel = () => {
    const buttons = [
        ['AC', '+/-', '%', '÷'],
        ['7', '8', '9', 'X'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '=']
      ]

    return <div>
        {buttons.map(buttonGroup => (
            <Button buttonGroup={buttonGroup} />
        ))}
    </div>
}

export default ButtonPanel
