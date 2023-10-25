import React from 'react'
import './Button.css'
import propTypes from 'prop-types'

export default function Button({ size, variant = 'primary', type = 'button', label }, ...props) {
    const modeVariant = variant ? `btn-bg-${variant}` : 'btn-bg-secondary'
    return (
        <button
            type={type}
            className={[`btn btn-size-${size} ${modeVariant}`].join(' ')}
            {...props}
        >
            {label}
        </button>
    )
}

Button.propTypes = {
    size: propTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
    variant: propTypes.oneOf(['primary', 'secondary', 'danger']),
    type: propTypes.oneOf(['button', 'submit']),
    label: propTypes.string,
}
