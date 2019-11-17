import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import x1 from './three.png'
import x2 from './four.png'
import x4 from './3.jpg'
import x3 from './first.png'
import { Grid } from 'antd-mobile';

const arr = [
  '桌','床','椅','书架','沙发','家居饰品','户外家具','全部分类'
]
const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `${arr[i]}`,
}));

const data1 = Array.from(new Array(8)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));

export default class AppCheng extends React.Component {
  state = {
    data: /*['1', '2', '3'],*/
          ['1','2','3','4'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: /*['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],*/
              ['x1','x2','x3','x4'],
      });
    }, 100);
  }
  render() {
    return (
      <WingBlank>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                /*src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}*/
                src= {x3}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '20%' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        <div>
          <Grid data={data} hasLine={false} />
        </div>  
        <div>
          <img src={x1} alt="" style={{width: '40%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
          <img src={x2} alt="" style={{width: '40%',height: '30%',marginLeft: '5%',marginTop: '4%'}}/>
        </div>
        <div>
        <img src={x4} alt="" style={{width: '85%',height: '30%',marginTop: '4%',marginLeft: '6%'}}/>
        </div>
      </WingBlank>
        
    );
  }
}
