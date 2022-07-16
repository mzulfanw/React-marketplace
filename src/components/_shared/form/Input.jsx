import React from 'react'
import PropTypes from 'prop-types'
import {Input as InputAntd} from 'antd'

function Input({
    size,
    placeholder,
    value,
    onChange = () => {},
    ...others
}) {
    return(
        <InputAntd
            size={size || 'middle'}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            {...others}
        />
    )
}

Input.propTypes = {
    size: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func
}

export default Input