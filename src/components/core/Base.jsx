import React from 'react'
import { Layout } from 'antd'
import Nav from './Nav'
import PropTypes from 'prop-types'
import '../../App.css'

const { Content, Footer } = Layout

function Base({
    children
}) {
    return (
        <Layout className='layout'>
            <Nav/>
            <Content>
                {children}
            </Content>
            <Footer>
                Test
            </Footer>
        </Layout>
    )
}

Base.propTypes = {
    children: PropTypes.node
}

export default Base