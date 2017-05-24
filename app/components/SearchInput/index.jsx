import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'

export default class SearchInput extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={value:''}
  }
  render(){
    return (
    <div className="search-container">
      <i className="icon-search"></i>
      <input type="text"
             className="search-input"
             placeholder="请输入关键字"
             value={this.state.value}
             onChange={this.ChangeHandle.bind(this)}
             onKeyUp={this.KeyUpHandle.bind(this)}/>

    </div>

    )
  }
  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }
  ChangeHandle(e){
    this.setState({
      value:e.target.value
    })
  }
  KeyUpHandle(e){
    if(e.keyCode !== 13){return}
    this.props.searchFn(e.target.value)
  }

}