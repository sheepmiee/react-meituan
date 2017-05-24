import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './style.less'

import Item from './Item'


class ListComponent extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="list-container">
        {this.props.data.map((item,index)=>(<Item key={index} data={item}/>))}
      </div>
    )
  }
}

export default ListComponent