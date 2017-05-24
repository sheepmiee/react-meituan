import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {hashHistory} from 'react-router';

import './style.less'

export default class Header extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="common-header theme-background">
        <div className="back-icon" onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
  clickHandle(){
    let backRouter = this.props.backRouter;
    if(backRouter){
      hashHistory.push(backRouter);
    }else{
      window.history.back();
    }
  }
}