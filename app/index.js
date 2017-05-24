import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

import './static/css/common.less'
import './static/css/font.css'
import RouterMap from './router/routerMap'
const store = configureStore();
render(
  <Provider store={store}>
    <RouterMap/>
  </Provider>,document.querySelector('#app'));