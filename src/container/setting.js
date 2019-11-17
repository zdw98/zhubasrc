import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { NavLink } from 'react-router-dom';

export default class setting extends Component {
    render() {
        return (
            <div>
                <NavBar
                    style={{ backgroundColor: '#3fcccb', color: '#ffffff' }}
                    leftContent={[
                        <NavLink key="0" to='/'>
                            <img src={require('./back.png')} style={{ color: '#ffffff', width: '30px', height: '30px', marginRight: '26px' }} /></NavLink>,
                    ]}
                >设置
                    </NavBar>
                <div >
                    <div style={{ background: '#fff', marginTop: '15px', padding: '10px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <img src={require('./update.png')} style={{ width: '30px', height: '30px', marginRight: '8px' }} />资料修改 </div>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <img src={require('./enter.png')} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div style={{ background: '#fff', borderTop: '1px solid #ddd', padding: '10px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <img src={require('./password.png')} style={{ width: '30px', height: '30px', marginRight: '8px' }} />密码修改 </div>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <img src={require('./enter.png')} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div style={{ background: '#fff', marginTop: '15px', padding: '10px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <img src={require('./clean.png')} style={{ width: '30px', height: '30px', marginRight: '8px' }} />清除缓存 </div>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                            356M
                        </div>
                    </div>
                    <div style={{ background: '#fff', marginTop: '15px', padding: '10px', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                            <img src={require('./about.png')} style={{ width: '30px', height: '30px', marginRight: '8px' }} />关于我们 </div>
                        <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <img src={require('./enter.png')} style={{ width: '30px', height: '30px' }} />
                        </div>
                    </div>
                    <div style={{
                        width: '80%', padding: '10px 0px', position: 'relative', left: '10%', background: "red", borderRadius: '5px', fontSize: '20px',
                        color: '#fff', display: 'flex', alignItems: "center", justifyContent: "center",fontWeight:'600',marginTop:'20px'
                    }}>
                        退出登录
                    </div>
                </div>
            </div>
        )
    }
}
