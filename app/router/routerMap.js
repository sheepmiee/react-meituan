import React from 'react'
import {Router,Route,IndexRoute,hashHistory} from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Login from '../containers/Login'
import City from '../containers/City'
import User from '../containers/User'
import Search from '../containers/Search'
import Detail from '../containers/Detail'
import NotFound from '../containers/404'

export default class RouterMap extends React.Component{
  render(){
    return (
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="city" component={City}></Route>
        <Route path='/Login(/:router)' component={Login}/>
        <Route path="user" component={User}></Route>
        <Route path="search/:category(/:keyword)" component={Search}></Route>
        <Route path="detail/:id" component={Detail}></Route>
        <Route path="*" component={NotFound}></Route>
      </Route>
    </Router>
    )
  }
}