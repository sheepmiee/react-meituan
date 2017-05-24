import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Item from './Item';
import './style.less';

export default class Detail extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let data = this.props.data;
    return (
      <div className="comment-list">
        {data.map((item, index) => {
          return <Item key={index} data={item}/>
        })}
      </div>
    )
  }
}