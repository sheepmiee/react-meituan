import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import './style.less'

export default class CurrentCity extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="current-city">
        <h2>{this.props.cityName}&nbsp;<span>GPS定位</span></h2>
      </div>
    )
  }
}