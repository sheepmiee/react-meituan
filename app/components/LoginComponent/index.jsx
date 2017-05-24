import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import './style.less'

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      username: '',
      phoneCheck:true
    }
  }
  render() {
    return (
      <div id="login-container">
        {this.state.phoneCheck?<div></div>:<div className="phone-check">请输入正确的手机号</div>}
        <div className="input-container phone-container">
          <i className="icon-tablet theme-font"></i>
          <input
            type="text"
            placeholder="输入手机号"
            onChange={this.changeHandle.bind(this)}
            value={this.state.username}
          />
        </div>
        <div className="input-container password-container">
          <i className="icon-key theme-font"></i>
          <button className="theme-font">发送验证码</button>
          <input type="text" placeholder="输入验证码"/>
        </div>
        <button className="btn-login theme-background" onClick={this.clickHandle.bind(this)}>登录</button>
      </div>
    )
  }
  changeHandle(e) {
    this.setState({
      username: e.target.value
    })
  }
  clickHandle() {
    let username = this.state.username;
    if(!/^1[3578]\d{9}$/.test(username)){
      console.log('true');
      this.setState({
        phoneCheck:false
      });
      return;
    }
    this.setState({
      phoneCheck:true
    });
    let loginHandle = this.props.loginHandle;
    loginHandle(username);
  }
}

export default Login