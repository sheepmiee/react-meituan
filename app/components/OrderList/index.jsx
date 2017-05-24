import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from './Item'
import './style.less'

export default class OrderList extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="order-list">
        <h2>您的订单</h2>
        {this.props.data.map((item,index)=>(<Item key={index} item={item} commentSubmit={this.props.commentSubmit}/>))}
      </div>
    )
  }

}