import React from 'react';
import pureRenderMixin from 'react-addons-pure-render-mixin';

import './style.less'
import {getListData} from '../../../fetch/home/home';
import ListComponent from '../../../components/ListComponent';
import LoadMore from '../../../components/LoadMore';

export default class List extends React.Component{
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
        <h2 className="home-list-title">猜你喜欢</h2>
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
    let cityName = this.props.cityName;
    const result = getListData(cityName,0);
    this.resultHandle(result)
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
    let cityName = this.props.cityName;
    let page = this.state.page;
    let result = getListData(cityName,page);
    this.resultHandle(result);
    this.setState({
      page:page+1,
      isLoadingMore:false
    })
  }
}
