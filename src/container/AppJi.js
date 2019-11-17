import { Carousel, WingBlank } from 'antd-mobile';
import React, { Component } from 'react'
import x1 from './first.png'
import x2 from './2.jpg'
import x3 from './3.jpg'
export default class AppJi extends React.Component {
  state = {
    data: /*['1', '2', '3'],*/
          ['1','2'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: /*['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],*/
              ['x1','x2'],
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
                src= {x1}
                alt=""
                style={{ width: '100%', verticalAlign: 'top',height: '35%' }}
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
          <img src={x2} alt="" style={{width: '30%',height: '30%',marginTop: '5%'}}/>
          <img src={x2} alt="" style={{width: '30%',height: '30%',marginLeft: '5%',marginRight: '5%',marginTop: '5%'}}/>
          <img src={x2} alt="" style={{width: '30%',height: '30%',marginTop: '5%'}}/>
        </div>
        <div>
          <p style={{fontSize: '25px'}}>热门推荐</p>
        </div>
        <div style={{position: 'relative'}}>
          <img src={x3} alt="" style={{ 
            height: '30%', 
            width: '100%',
          }}/>
        </div>
      </WingBlank>
        
    );
  }
}
