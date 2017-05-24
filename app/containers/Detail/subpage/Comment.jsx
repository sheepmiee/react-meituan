import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getCommentData} from '../../../fetch/detail/detail';

import CommentList from '../../../components/CommentList';
import LoadMore from '../../../components/LoadMore';
import './style.less'

export default class Comment extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:[],
      hasMore:false,
      page:0,
      isLoadingMore:false
    }
  }
  render(){
    let data = this.state.data;
    let isLoadingMore = this.state.isLoadingMore;
    return (
      <div className="detail-comment">
        <h2 className="comment-list-title">用户评价</h2>
        {
          data.length?<CommentList data={data}/>:<div style={{width:'100%',textAlign:'center'}}>loading...</div>
        }
        {
          this.state.hasMore?<LoadMore isLoadingMore={isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>:<div>{/*没有更多啦*/}</div>
        }
      </div>
    )
  }
  componentDidMount(){
    let id = this.props.id;
    let result = getCommentData(0,id);
    this.resultHandle(result);
  }
  resultHandle(result){
    result
      .then(res=>res.json())
      .then(json=>{
        let data = json.data;
        let hasMore = json.hasMore;
        let page = this.state.page+1;
        this.setState({
          hasMore,
          page,
          data:this.state.data.concat(data),

        });
      })
      .catch(e=>{if(__DEV__){console.error('List模块获取数据失败'+e.message)}})
  }
  loadMoreData(){
    this.setState({isLoadingMore:true});
    let id = this.props.id;
    let page = this.state.page;
    let result = getCommentData(page,id);
    this.resultHandle(result);
    this.setState({
      isLoadingMore:false
    });
  }
}