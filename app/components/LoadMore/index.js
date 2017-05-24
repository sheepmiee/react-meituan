import React from 'react';
import purRenderMixin from 'react-addons-pure-render-mixin';

import './style.less';

export default class LoadMore extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = purRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let isLoadingMore = this.props.isLoadingMore;
    return (
      isLoadingMore?<div className="load-more">加载中...</div>
        :<div ref="loadMoreEle" className="load-more" onClick={this.loadMoreHandle.bind(this)}>加载更多</div>
    )
  }
  loadMoreHandle(){
    this.props.loadMoreFn();
  }

  componentDidMount(){
    let loadMoreFn = this.props.loadMoreFn;
    let loadMoreEle = this.refs.loadMoreEle;
    let timer = null;
    function callback() {
      let top = loadMoreEle.getBoundingClientRect().top;
      let eleHeight = loadMoreEle.clientHeight;
      let winHeight = window.screen.height;
      if(top && top+eleHeight <= winHeight){
        loadMoreFn();
      }
    }
    window.addEventListener('scroll',()=> {
      if(this.props.isLoadingMore){return}
      if(timer){clearTimeout(timer)}
      timer = setTimeout(callback,50);
    },false)
  }
}