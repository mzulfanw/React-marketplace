import React from 'react'
import { Layout, Menu } from 'antd/lib/layout/'
const { Header }  = Layout

function Nav() {
    return (
        <Header>
            <Menu
                theme='dark'
                mode='horizontal'
                defaultSelectedKeys={['2']}
                items={new Array(15).fill(null).map((_, index) => {
                    const key = index + 1
                    return {
                        key,
                        label: `nav ${key}`,
                    }
                })}
            />
        </Header>
    )
}

export default Nav