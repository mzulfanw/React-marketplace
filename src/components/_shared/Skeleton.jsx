import React from 'react'
import { Stack, Skeleton as SkeletonChakra } from '@chakra-ui/react'
import PropTypes from 'prop-types'

function Skeleton({
    loading
}) {
    return (
        <Stack>
            <SkeletonChakra
                height='40px'
                isLoaded={loading}  
            />
        </Stack>
    )
}

Skeleton.propTypes = {
    loading: PropTypes.bool
}

export default Skeleton