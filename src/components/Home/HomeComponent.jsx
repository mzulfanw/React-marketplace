import React from 'react'
import PropTypes from 'prop-types'
import Button from '../_shared/Button'
import Skeleton from '../_shared/Skeleton'

function HomeComponent({
    product
}) {
    console.log(product)
    return (
        <div style={{
            backgroundColor: '#000'
        }}>
            {
                product?.loading ? (
                    <Skeleton
                        loading={!product?.loading}
                    />
                ) : (
                    <p>Heloo there</p>
                )
            }
        </div>
    )
}

HomeComponent.propTypes = {
    product: PropTypes.object
}

export default HomeComponent