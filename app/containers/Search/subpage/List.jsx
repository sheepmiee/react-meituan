import React from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

import {getSearchData} from '../../../fetch/search/search';
import ListComponent from '../../../components/ListComponent';
import LoadMore from '../../../components/LoadMore';

class List extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = pureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data:[],
      hasMore:false,
      isLoadingMore:false,
      page:1
    };
  }
  render(){
    return (
      <div>
        {
          this.state.data.length ? <ListComponent data={this.state.data}/> : <div>{/*加载中...*/}</div>
        }
        {
          this.state.hasMore?<LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>:<div>{/*没有更多啦*/}</div>
        }
      </div>
    )
  }

  componentDidMount(){
    let cityName = this.props.userinfo.cityName;
    let category = this.props.category;
    let keyword = this.props.keyword;
    let result = getSearchData(0,cityName,category,keyword);
    this.resultHandle(result);
  }

  resultHandle(result){
    result
      .then(res=>res.json())
      .then(json=>{
        const hasMore = json.hasMore;
        const data = json.data;
        this.setState({
          hasMore: hasMore,
          // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
          data: this.state.data.concat(data)
        })
      })
      .catch(e=>{if(__DEV__){console.error('List模块获取数据失败'+e.message)}})
  }

  loadMoreData(){
    this.setState({
      isLoadingMore:true,
    });
    let cityName = this.props.userinfo.cityName;
    let page = this.state.page;
    let category = this.props.category;
    let keyword = this.props.keyword;
    let result = getSearchData(page,cityName,category,keyword);
    this.resultHandle(result);
    this.setState({
      page:page+1,
      isLoadingMore:false
    })
  }
}

function mapStateToProps(state) {
  return {userinfo:state.userinfo}
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(mapStateToProps,mapDispatchToProps)(List)