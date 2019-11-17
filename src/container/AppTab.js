import React from 'react'
import { TabBar, NavBar ,Icon} from 'antd-mobile';
import AppJi from './AppJi'
import AppHome from './AppHome'
import AppLing from './AppLing'
import AppGan from './AppGan'
import AppShang from './AppShang'
import AppCheng from './AppCheng'
import AppMy from './AppMy'
import AppDe from './AppDe'
import AppMyde from './AppMyde'


export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
    };
  }
  render() {
    return (
        <div style={{ 
            position: 'fixed', 
            height: '100%', 
            width: '100%', 
            top: 0 
        }}>
            <TabBar
            unselectedTintColor="#3fcccb"
            tintColor="#3fcccb"
            barTintColor="white"
            >
            <TabBar.Item
                title="首页"
                key="Life"
                icon={
                  <Icon type='icon-shouye-copy-copy' style={{
     
                  }}/>
                }
                selectedIcon={
                  <Icon type='icon-shouye-copy' style={{
     
                  }}/>
                }
                selected={this.state.selectedTab === 'blueTab'}
                onPress={() => {
                    this.setState({
                        selectedTab: 'blueTab',
                    });
                }}
            >
            <AppHome/>
            <AppJi />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Icon type='icon-bangzhuchuangyixiangfaideadengpaofaguang-copy-copy' style={{
 
              }}/>
            }
            selectedIcon={
              <Icon type='icon-bangzhuchuangyixiangfaideadengpaofaguang-copy' style={{
 
              }}/>
            }
            title="灵感"
            key="Koubei"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
          >
          <AppLing />
          <AppGan />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <img 
              style={{
                width: '40px',
                height: '40px',
                }}
                src={require('./add.png')}
              />
            }
            selectedIcon={
              <img 
              style={{
                width: '40px',
                height: '40px',
                }}
                src={require('./add.png')}
              />
            }
            // title="商城"
            key=""
          >
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Icon type='icon-shangcheng-copy-copy' style={{

              }}/>
            }
            selectedIcon={
              <Icon type='icon-shangcheng-copy' style={{
 
              }}/>
            }
            title="商城"
            key="Friend"
            dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
          <AppShang />
          <AppDe />
          <AppCheng />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <Icon type='icon-wode-copy-copy' style={{
 
              }}/>
            }
            selectedIcon={
              <Icon type='icon-wode-copy' style={{
 
              }}/>
            }
            title="我的"
            key="my"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
          <AppMy />
          <AppDe />
          <AppMyde />
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}