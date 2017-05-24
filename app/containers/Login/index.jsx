import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { hashHistory } from 'react-router'

import Header from '../../components/Header';
import LoginComponent from '../../components/LoginComponent';
import * as userinfoActions from '../../actions/userinfo'
class Login extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      loginCheck:false
    }
  }
  render(){
    return (
      <div>
        <Header title='登陆'/>
        {
          this.state.loginCheck?<div>{/*等待登陆检查中*/}</div>:<LoginComponent loginHandle={this.loginHandle.bind(this)}/>
        }

      </div>
    )
  }
  componentDidMount(){
    let userinfo = this.props.userinfo;
    if(userinfo.username){
      this.goUserPage()
    }else{
      this.setState({
        loginCheck:false
      })
    }
  }
  goUserPage(){
    hashHistory.push('/user')
  }
  loginHandle(username){
    let userinfo = this.props.userinfo;
    userinfo.username = username;
    this.props.userinfoActions.update(userinfo);
    let router = this.props.params.router;
    if(router){
      hashHistory.push(router);
    }else{
      this.goUserPage();
    }
  }
}

function mapStateToProps(state) {
  return {userinfo:state.userinfo}
}
function mapDispatchToProps(dispatch) {
  return {userinfoActions:bindActionCreators(userinfoActions,dispatch)}
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)