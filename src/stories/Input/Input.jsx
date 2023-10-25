import React from 'react'
import './Input.css'
import propTypes from 'prop-types'

export default function Input({ type, placeHolder = 'Input your text...', size = 'medium' }, ...props) {
    const { ...rest } = props
    const sizeInput = size ? `input-size-${size}` : 'input-size-default'
    return (
        <input type={type} placeholder={placeHolder} className={[`${sizeInput}`].join(' ')} {...rest} />
    )
}

Input.propTypes = {
    type: propTypes.string,
    placeHolder: propTypes.string,
    size: propTypes.oneOf(['small', 'medium', 'large'])
}
