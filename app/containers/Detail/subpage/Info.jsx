import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {getInfoData} from '../../../fetch/detail/detail'
import DetailInfo from '../../../components/DetailInfo'

export default class Info extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      data:{}
    }
  }
  render(){
    let data = this.state.data;
    return (
      Object.keys(data).length?<DetailInfo data={data}/>: <div>加载中</div>
    )
  }
  componentDidMount(){
    let result = getInfoData(this.props.id);
    result
      .then(data=>data.json())
      .then(json=>{
        this.setState({data:json});
      })
      .catch(e=>{if(__DEV__){console.error('List模块获取数据失败'+e.message)}})

  }

}