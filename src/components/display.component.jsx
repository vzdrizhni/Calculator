import React from 'react'
import PropTypes from 'prop-types'

const Display = ({result, next}) => {
    if (next === null) {
        return (
            <div id='display-container'>
                <h4>{Number(result)}</h4>
            </div>
        )
    } else {
        return (
            <div id='display-container'>
                <h4>{Number(next)}</h4>
            </div>
        ) 
    }    
}

Display.propTypes = {
    result: PropTypes.string
}

Display.defaultProps = {
    result: '0'
}

export default Display