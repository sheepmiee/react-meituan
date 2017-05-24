import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'

export default class CityList extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div  className="city-list-container">
        <h3>热门城市</h3>
        <ul className="clear-fix" onClick={(e)=>{this.clickHandle(e)}}>
          <li><span>北京</span></li>
          <li><span>上海</span></li>
          <li><span>杭州</span></li>
          <li><span>广州</span></li>
          <li><span>深圳</span></li>
          <li><span>南京</span></li>
          <li><span>西安</span></li>
          <li><span>天津</span></li>
          <li><span>重庆</span></li>
          <li><span>厦门</span></li>
          <li><span>武汉</span></li>
          <li><span>成都</span></li>
        </ul>
      </div>
    )
  }
  clickHandle(e){
    let target = e.target;
    if(target.tagName.toLowerCase() === 'span'){
      let newCity = target.innerHTML;
      this.props.changeCityFn(newCity);
    }
  }
}