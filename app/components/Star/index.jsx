import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

export default class Star extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    let star = this.props.star || 0;
    star = star > 5 ? 5 : star;
    return (
      <div className="star-container">
        {[1, 2, 3, 4, 5].map((item, index) => {
          let lightClass = star >= item ? ' light' : '';
          return <i key={index} className={'icon-star' + lightClass} onClick={this.clickHandle.bind(this,item)}></i>
        })}
      </div>
    )
  }
  clickHandle(star){
    this.props.changeStar(star)
  }
}

