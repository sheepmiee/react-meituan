import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

export default class BuyAndStore extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let lightClass = this.props.isStore?'light':'';
    let store = this.props.isStore?'已收藏':'收藏';
    return (
      <div className="buy-and-store clear-fix">
        <div className="store-con float-left">
          <i className={"icon-star " + lightClass} onClick={this.props.storeHandle}></i>
          <br/>
          <span className={"store-text " + lightClass}>{store}</span>
        </div>
        <div className="buy-con float-right">
          <div className="buy-button theme-background" onClick={this.props.buyHandle}>立即购买</div>
        </div>
      </div>
    )
  }
}