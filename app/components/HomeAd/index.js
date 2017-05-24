import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class HomeAd extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div id="ad-home">
        <h2>超值特惠</h2>
        <div className="container clear-fix">
          {this.props.data.map((item, index) => {
            return (
              <div key={index} className={"item float-left "+"item"+index}>
                <a className="img-link" href={item.link} target="_blank">
                  <span className="info">
                    <strong className={"strong"+index}>{item.title}</strong>
                    <small>{item.subTitle}</small>
                  </span>
                  <div className="img-box">
                    <img src={item.img}/>
                  </div>
                </a>
              </div>

            )
          })}
        </div>
      </div>
    )
  }
}

export default HomeAd