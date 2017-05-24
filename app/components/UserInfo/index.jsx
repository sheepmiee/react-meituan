import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

export default class UserInfo extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="user-info">
        <div className="username-con">
          <i className="icon-user theme-font"></i><span>{this.props.username}</span>
        </div>
        <div className="cityNae-con">
          <i className="icon-map-marker theme-font"></i><span className="city-text">{this.props.cityName}</span>
        </div>
      </div>
    )
  }
}