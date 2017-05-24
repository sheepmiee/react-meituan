import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getOrderListData,postComment} from '../../../fetch/user/orderlist';

import OrderListComponent from '../../../components/OrderList';

export default class OrderList extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:[]
    }
  }
  render(){
    return (
      <OrderListComponent commentSubmit={this.commentSubmit.bind(this)} data={this.state.data}/>
    )
  }
  componentDidMount(){
    let username = this.props.username;
    if(!username){return}
    let result = getOrderListData(username);
    result
      .then(res =>res.json())
      .then(json => {
        this.setState({
          data:json
        })
      })
      .catch(ex => {
      if (__DEV__) {
        console.error('用户主页“订单列表”获取数据报错, ', ex.message)
      }
    })
  }
  commentSubmit(id,value,star,callback){
    let result = postComment(id, value, star);
    result
      .then(res=>{
        console.log(res);
        return res.json()
      })
      .then(json=>{
        console.log(json);
        if(json.errno===0){
          callback()
        }
      })
  }
}