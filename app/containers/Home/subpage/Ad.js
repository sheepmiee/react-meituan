import React from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import {getAdData} from '../../../fetch/home/home';
import HomeAd from '../../../components/HomeAd';

export default class Ad extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {data:[]};
  }
  render(){
    return (
      <div>
        {
          this.state.data.length?<HomeAd data={this.state.data}/>:<div>{/* 加载中... */}</div>
        }
      </div>
    )
  }

  componentDidMount(){
    const result = getAdData();
    result
      .then(res=>res.json())
      .then(data=>{if(data.length){
        this.setState({data})
      }})
      .catch(e=>{if(__DEV__){console.error('Ad模块获取数据失败'+e.message)}})
  }
}