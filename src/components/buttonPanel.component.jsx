import React from 'react'
import Button from './button.component'

const ButtonPanel = () => {
    const buttons = [
        [{name: 'AC'}, {name: '+/-'}, {name: '%'}, {name: '÷'}],
        [{name: '7'}, {name: '8'}, {name: '9'}, {name: 'X'}],
        [{name: '4'}, {name: '5'}, {name: '6'}, {name: '-'}],
        [{name: '1'}, {name: '2'}, {name: '3'}, {name: '+'}],
        [{name: '0', wide: true}, {name: '.'}, {name: '='}]
      ]

    return <div className='button-group'>
        {buttons.map((buttonGroup, index) => (
            <div key={`${index}`} className={`button-sub-group`}>
                {buttonGroup.map((button) => (
                    <Button button={button.name} key={button.name} wide={button.wide}/>
                ))}
            </div>
        ))}
    </div>
}

export default ButtonPanel
