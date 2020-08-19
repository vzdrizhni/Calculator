import React from 'react'
import PropTypes from 'prop-types'

const Display = ({result}) => (
    <div id='display-container'>
        <h4>{Number(result).toString()}</h4>
    </div>
)

// Display.propTypes = {
//     result: PropTypes.string
// }

Display.defaultProps = {
    result: '0'
}

export default Display