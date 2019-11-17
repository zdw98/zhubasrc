import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';

export default class AppShang extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{backgroundColor:'#3fcccb',color:'#ffffff'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ color:'#ffffff', marginRight: '16px' }} />,
                    ]}
                    >商城</NavBar>
            </div>
        )
    }
}
