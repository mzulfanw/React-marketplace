import React from 'react'
import PropTypes from 'prop-types'
import { Button as ButtonChakra, ButtonGroup } from '@chakra-ui/react'


function Button({
    variant,
    colorScheme,
    size,
    isBusy,
    text,
    loading,
    onClick = () => {},
    ...others
}) {
    return (
        <ButtonChakra
            colorScheme={colorScheme || 'gray'}
            size={size || 'md'}
            variant={variant || 'solid'}
            onClick={onClick}
        >
            {text}
        </ButtonChakra>
    )
}

Button.propTypes = {
    variant: PropTypes.string,
    colorScheme: PropTypes.string,
    size: PropTypes.string,
    text: PropTypes.string,
    loading: PropTypes.bool,
    isBusy: PropTypes.bool,
    onClick: PropTypes.func
}

export default Button