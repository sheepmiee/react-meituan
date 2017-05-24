import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import SearchHeader from '../../components/SearchHeader';
import SearchList from './subpage/List';


export default class Search extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let params = this.props.params;
    return (
      <div>
        <SearchHeader keyword={params.keyword} category={params.category}/>
        <SearchList category={params.category} keyword={params.keyword}/>
      </div>
    )
  }
}