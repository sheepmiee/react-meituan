import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {Link,hashHistory} from 'react-router';

import './style.less'
import SearchInput from '../SearchInput'
export default class HomeHeader extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div className="clear-fix home-header theme-background">
        <div className="float-left home-header-left">
          <div className="left-con float-left">
            <Link to="/city">{this.props.cityName}</Link>
          </div>
          <div className="right-con float-right">
            <i className="icon-angle-down"></i>
          </div>

        </div>
        <div className="float-right home-header-right">
          <Link to="/login">
            <i className="icon-user"></i>
          </Link>
        </div>
        <SearchInput value="" searchFn={this.searchFn.bind(this)}/>
      </div>
    )
  }
  searchFn(value){
    hashHistory.push('/search/all/'+encodeURIComponent(value));
  }
}