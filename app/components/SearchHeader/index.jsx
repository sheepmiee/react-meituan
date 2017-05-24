import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { hashHistory } from 'react-router'

import './style.less'
import SearchInput from '../SearchInput';

export default class Header extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="search-header theme-background">
        <div className="back-icon" onClick={this.clickHandle.bind(this)}>
          <i className="icon-chevron-left"></i>
        </div>
        <SearchInput value={this.props.keyword || ''} searchFn={this.searchFn.bind(this)}/>
      </div>
    )
  }
  clickHandle(){
    hashHistory.push('/');
  }
  searchFn(value){
    hashHistory.push('/search/'+this.props.category+'/' + encodeURIComponent(value))
  }
}