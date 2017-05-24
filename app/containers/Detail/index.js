import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Header from '../../components/Header'
import Info from './subpage/Info'
import Buy from './subpage/Buy'
import Comment from './subpage/Comment'
export default class Detail extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let id = this.props.params.id;
    return (
      <div>
        <Header title="商户详情"/>
        <Info id={id}/>
        <Buy id={id}></Buy>
        <div style={{height:'15px'}}></div>
        <Comment id={id}/>
      </div>
    )
  }
}