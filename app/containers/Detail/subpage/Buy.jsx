import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {hashHistory} from 'react-router'

import * as storeActions from '../../../actions/store';
import BuyAndStore from '../../../components/BuyAndStore';

class Buy extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      isStore:false
    }
  }
  render(){
    return (
      <BuyAndStore isStore={this.state.isStore} buyHandle={this.buyHandle.bind(this)} storeHandle={this.storeHandle.bind(this)}/>
    )
  }
  componentDidMount(){
    this.checkStore();
  }
  //检查是否收藏
  checkStore(){
    let id = this.props.id;
    let storeList = this.props.store;
    let isStore = storeList.some(item=>item.id===id);
    this.setState({isStore});
  }

  //购买处理
  buyHandle(){
    let isLogin = this.loginCheck();
    if(isLogin){
      hashHistory.push('/user')
    }
  }

  //收藏处理
  storeHandle(){
    let isLogin = this.loginCheck();
    if(!isLogin){return}
    let id = this.props.id;
    let isStore = this.state.isStore;
    let storeActions = this.props.storeActions;
    if(isStore){
      storeActions.remove({id})
    }else{
      storeActions.add({id})
    }
    this.setState({isStore:!isStore});
  }

  //登陆检查
  loginCheck(){
    let id = this.props.id;
    let userinfo = this.props.userinfo;
    if (!userinfo.username) {
      // 跳转到登录页面的时候，要传入目标router，以便登录完了可以自己跳转回来
      hashHistory.push('/login/' + encodeURIComponent('/detail/' + id));
      return false
    }
    return true
  }

}

function mapStateToProps(state) {
  return {
    userinfo:state.userinfo,
    store:state.store
  }
}
function mapDispatchToProps(dispatch) {
  return {
    storeActions:bindActionCreators(storeActions,dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Buy)