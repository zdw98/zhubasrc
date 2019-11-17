import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import { NavLink } from 'react-router-dom';
import { MyIcon } from './util'
export default class AppMy extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffffff' }}
                    rightContent={[
                        <NavLink key="0" to='/setting'>
                            <MyIcon type="icon-shezhi-copy" style={{ fontSize: '18px', color: '#ffffff', marginRight: '16px' }} />
                        </NavLink>,
                    ]}

                >我的
    
                    </NavBar>

            </div>
        )
    }
}
