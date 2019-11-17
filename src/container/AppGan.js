import React, { Component } from 'react'
import { NavBar, Icon, Tabs } from 'antd-mobile';
import x2 from './second.png'
const tabs2 = [
    { title: '推荐' },
    { title: '冬季'},
    { title: '宜家' },
    { title: '小清新' },
    { title: '小户型' },
    { title: '个性色彩' },
  ];
export default class AppGan extends Component {
    render() {
        return (
            <div>
                
                    {<Tabs tabs={tabs2}
                initialPage={0}
                tabBarUnderlineStyle={{border:'2px solid #3fcccb'}}
                onChange={(tab, index) => { console.log('onChange', index, tab); }}
                onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                <div /*style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '200px',backgroundColor: '#fff' }}*/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginLeft: '5%',marginTop: '4%'}}/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginLeft: '5%',marginTop: '4%'}}/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
                    <img src={x2} alt="" style={{width: '40%',height: '30%',marginLeft: '5%',marginTop: '4%'}}/>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    冬季
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    宜家
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    小清新
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    小户型
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                    个性色彩
                </div>
                </Tabs>}
            </div>
        )
    }
}
