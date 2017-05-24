import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userinfoActions from '../../actions/userinfo';
import localStore from '../../util/localStore'
import {hashHistory} from 'react-router'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'
import {CITYNAME} from '../../config/localStoreKeys'

class City extends React.Component{
  constructor(props,context){
    super(props,context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    return (
      <div>
        <Header title="选择城市"/>
        <CurrentCity cityName={this.props.userinfo.cityName}/>
        <CityList changeCityFn={this.changeCity.bind(this)}/>
      </div>
    )
  }
  changeCity(newCity){
    if(newCity == null){return}
    //修改redux
    let username = this.props.userinfo.username;
    if(username){
      this.props.userinfoActions.update({
        cityName:newCity,
        username
      });
    }else{
      this.props.userinfoActions.update({
        cityName:newCity
      });
    }
    //修改localStorage
    localStore.setItem(CITYNAME,newCity);
    //跳转首页
    hashHistory.push('/')
  }
}

function mapStateToProps(state) {
  return {userinfo:state.userinfo}
}
function mapDispathToProps(dispatch) {
  return{userinfoActions:bindActionCreators(userinfoActions,dispatch)}
}

export default connect(mapStateToProps,mapDispathToProps)(City);