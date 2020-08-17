import React from 'react'
import Button from './button.component'

const ButtonPanel = () => {
    const buttons = [
        [{name: 'AC', color: ''}, {name: '+/-', color: ''}, {name: '%', color: ''}, {name: '÷'}],
        [{name: '7', color: ''}, {name: '8', color: ''}, {name: '9', color: ''}, {name: 'X'}],
        [{name: '4', color: ''}, {name: '5', color: ''}, {name: '6', color: ''}, {name: '-'}],
        [{name: '1', color: ''}, {name: '2', color: ''}, {name: '3', color: ''}, {name: '+'}],
        [{name: '0', wide: true, color: ''}, {name: '.', color: ''}, {name: '='}]
      ]

    return <div className='button-group'>
        {buttons.map((buttonGroup, index) => (
            <div key={`${index}`} className={`button-sub-group`}>
                {buttonGroup.map((button) => (
                    <Button button={button.name} key={button.name} wide={button.wide} color={button.color}/>
                ))}
            </div>
        ))}
    </div>
}

export default ButtonPanel
