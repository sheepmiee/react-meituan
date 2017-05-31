## SPA(Single Page Application)
单页面应用,就是只有一张Web页面的应用。单页应用程序 (SPA) 是加载单个HTML 页面并在用户与应用程序交互时动态更新该页面的Web应用程序。

### 单页面应用的优点
1. 最大的好处是用户体验，对于内容的改动不需要加载整个页面。
2. 数据层和UI的分离，可以重新编写一个原生的移动设备应用程序而不用大动干戈（同一套后端程序代码，不用修改就可以用于Web界面、手机、平板等多种客户端）。
3. 高效。它对服务器压力很小，消耗更少的带宽，能够与面向服务的架构更好地结合。

### 单页面应用的缺点
1. 不利于SEO
2. 初次加载耗时增多
3. 导航不可用；前进、后退、地址栏等，需要程序进行管理；
书签，需要程序来提供支持；

### 应用场景
那么单页应用的应用如何呢？看了一些资料，总觉出来单页面应用有两个硬伤：
首屏加载慢（大量js导致首屏加载慢）、seo不友好
如何应用SPA或者是否应用SPA，大概需要考虑以下这几点：
1. 交互体验
不同的应用面对不同人群，会有不同的交互体验需求。
2. 工程代价
大型网站转spa会有很大的代价。
3. 容错问题
SPA所有脚本都加进来，如果出现一个JS错误，那很可能整个网站就挂掉了，风险很大。
4. 是否必要
简单呈现内容的网站，没有必要用spa。增加了开发和调试的复杂性，但是除了效果更酷炫点，没有多少实用价值。
5. 是否需要兼容低版本的ie浏览器

### SPA总结
综合了解了这种SPA单页应用和传统的多页面应用，在以后的开发中，我可能会采取单页和多页相结合的方式，该跳转的地方还是跳转，结合单页模式的用户体验优点，将用户体验发挥到极致，因为我觉得用户体验是最重要的东西之一。
## 项目安装的模块解释
开发依赖模块：
- autoprefixer：postcss-loader的一个插件,使用一个数据库根据当前浏览器的普及度以及属性支持自动给你的css添加前缀前缀：[详情点这里](http://www.jianshu.com/p/f5b0b92e6b0f?_blank)
- babel-core：babel转码的核心，必须安装[bable详情点这里(阮一峰)](http://www.ruanyifeng.com/blog/2016/01/babel.html?_blank)
- babel-loader：babel加载器，配置babel编译必备
- babel-plugin-add-module-exports：babel对export default{}支持不好，不想写成module.exports就需要安装[点这里](https://segmentfault.com/q/1010000005761096?_ea=902448?_blank)
- babel-plugin-react-transform：代替react-hot-loader的插件，是基于Babel Plugin的。这是一个基本的架子，要实现热替换还要安装其他插件。
- react-transform-hmr：安装这个才能实现热替换的功能。
- babel-preset-es2015：babel转译预设规则(转es5)
- babel-preset-react：babel转译预设规则(react的jsx)
- css-loader：允许引入css文件
- style-loader：为了在html中以style的方式嵌入css
- postcss-loader：一个插件平台，这里只要用其autoprefixer功能
- eslint-loader：代码规范检查[点这里](http://www.tuicool.com/articles/7JZZJzn?_blank)
- extract-text-webpack-plugin：分离css文件
- url-loader：图片与字体加载器,file-loader的上层封装,依赖file-loader
- file-loader：图片与字体加载器
- html-webpack-plugin：这样可以将输出的文件名自动注入到html中，不用我们自己手写
- json-loader：处理json文件
- koa：node框架
- koa-router：koa路由
- less：less编译css
- less-loader：less加载器
- open-browser-webpack-plugin：打包完成自动打开浏览器的插件
- webpack：一代神器
- webpack-dev-server：一个小型的Node.js Express服务器，可实现代码修改自动[看这里](https://segmentfault.com/a/1190000006964335_blank)
  
上线依赖模块：
- es6-promise：使用fetch时为了兼容老版本需要安装
- immutable：react性能优化，需要学习新的API[immutable](https://zhuanlan.zhihu.com/p/20295971?columnSlug=purerender_blank)
- react：
- react-addons-css-transition-group：实现组件出现与消失的css3过渡动画[官方地址](https://facebook.github.io/react/docs/animation.html_blank)
- react-addons-pure-render-mixin：用以替换shouldComponentUpdate，优化性能
- react-dom：
- react-redux：
- react-router：
- react-swipe：轮播图插件,引入swipe-js-iso,创建reat组件
- swipe-js-iso：基于swipe.js的一个Pull Request
- redux：
- whatwg-fetch：fetch

## webpack配置详解
### resolve
定义了解析模块路径时的配置，常用的就是extensions;可以用来指定模块的后缀，这样在引入模块时就不需要写后缀
```
resolve:{extensions:['', '.js','.jsx']}
```
### postcss
在加载css/less时，用到postcss,主要使用autoprefixer功能，能自动加css3的浏览器前缀；
```
postcss:[
    require('autoprefixer)//调用autoprefixer插件，例如display：flex 针对不同品牌及版本的浏览器hack前缀
]

```

### html-webpack-plugin
html模板插件
```
var HtmlWebpackPlugin = require('html-webpack-plugin');
plugins:[
    new HtmlWebpackPlugin({template:'./app/index.html'})
]

```

### webpack.HotModuleReplacementPlugin
```
var webpack = require('webpack');
plugins:[
    new webpack.HotModuleReplacementPlugin()
]
```
[看这里](http://segmentfault.com/a/1190000002767365#articleHeader6?_blank)

### open-browser-webpack-plugin
```
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
plugins:[
    new OpenBrowserPlugin({url:'http://localhost:8080'})
]
```
### DefinePlugin
可在业务js代码中使用 __DEV__ 判断是否是dev模式（dev模式下可以提示错误、测试报告等, production模式不提示,在package.json配置的dev脚本命令中定义了NODE_ENV的值，所以这里可以获取到，也可以直接写'true'）
```
var webpack = require('webpack');
plugins:[
    new webpack.DefinePlugin({__DEV__:JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))})
]
```

### webpack-dev-server 代理
```
devServer: {
        proxy: {
          // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
          // koa 代码在 ./mock 目录中，启动命令为 npm run mock
          '/api': {
            target: 'http://localhost:3000',
            secure: false
          }
        },
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
```
### ExtractTextPlugin
webpack.production.config中配置，实现上线css与js代码分离
```
var ExtractTextPlugin = require('extract-text-webpack-plugin');
loaders: [
      { test: /\.less$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss!less') },
      { test: /\.css$/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('style', 'css!postcss') }
    ]
plugins:[
    new ExtractTextPlugin('[name].[chunkhash:8].css')
]
```
### vender
```
entry: {
    app: path.resolve(__dirname, 'app/index.jsx'),
    // 将 第三方依赖 单独打包
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'es6-promise',
      'whatwg-fetch',
      'immutable'
    ]
  }
output: {
    path: __dirname + "/build",
    filename: "[name].[chunkhash:8].js",
    publicPath: '/'
  }
 plugins:[
    //提供公共代码
     new webpack.optimize.CommonsChunkPlugin({
           name: 'vendor',
           filename: '[name].[chunkhash:8].js'
         })
 ]
```
### import React from 'react'引用过程？
npm 安装的 react 的物理文件是存放在 ./node_modules/react中的，打开./node_modules/react/package.json找到"main": "react.js",，这里的main即指定了入口文件，即./node_modules/react/react.js这个文件。

### react开发中的代码分离
- page层:按页面拆分，每个页面有一个主页面index.jsx
- subPage层：对于复杂页面，要将一个页面拆封成多个子页,不复杂的页面只写在index.jsx里即可
- component层：只用来展示数据的组件，对于不同页面内相同的组件，写在component层以便复用
### react生命周期
#### 组件在初始化的时候，会触发5个钩子函数：
1. getDefaultProps()
设置默认的props，也可以用dufaultProps设置组件的默认属性。

2. getInitialState()
在使用es6的class语法时是没有这个钩子函数的，可以直接在constructor中定义this.state。此时可以访问this.props。

3. componentWillMount()
组件初始化时只调用，以后组件更新不调用，整个生命周期只调用一次，此时可以修改state。

4. render()
react最重要的步骤，创建虚拟dom，进行diff算法，更新dom树都在此进行。此时就不能更改state了。

5. componentDidMount()
组件渲染之后调用，可以通过this.getDOMNode()获取和操作dom节点，只调用一次。

#### 更新时触发的5个钩子函数：

6. componentWillReceivePorps(nextProps)
组件初始化时不调用，组件接受新的props时调用。

7. shouldComponentUpdate(nextProps, nextState)
react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在此对比前后两个props和state是否相同，如果相同则返回false阻止更新，因为相同的属性状态一定会生成相同的dom树，这样就不需要创造新的dom树和旧的dom树进行diff算法对比，节省大量性能，尤其是在dom结构复杂的时候。不过调用this.forceUpdate会跳过此步骤。

8. componentWillUpdate(nextProps, nextState)
组件初始化时不调用，只有在组件将要更新时才调用，此时可以修改state

9. render()

10. componentDidUpdate()
组件初始化时不调用，组件更新完成后调用，此时可以获取dom节点。
还有一个卸载钩子函数

11. componentWillUnmount()
组件将要卸载时调用，一些事件监听和定时器需要在此时清除。

以上可以看出来react总共有10个周期函数（render重复一次），这个10个函数可以满足我们所有对组件操作的需求，利用的好可以提高开发效率和组件性能。
### 常用的生命周期在项目中怎么用到？
- comopentDidMount
组件第一次加载时渲染loading组件，一般在此获取网络数据，将数据赋值给状态，改变状态重新渲染页面。实际开始项目开发时，会经常用到。
- shouldComponentUpdate
主要用于性能优化，React 的性能优化也是一个很重要的话题。
- componentDidUpdate
组件更新了之后触发的事件，一般用于清空并更新数据。实际开始项目开发时，会经常用到。
- componentWillUnmount
组件在销毁之前触发的事件，一般用户存储一些特殊信息，以及清理setTimeout事件等。

### react性能优化
- 介绍PureComponent
[点这里](http://www.open-open.com/lib/view/1484466792204?_blank)
- 性能检测,检测优化结果
npm i react-addons-perf --save
```
// 性能测试 
import Perf from 'react-addons-perf'; 
if (__DEV__) { window.Perf = Perf }
```

运行程序。在操作之前先运行Perf.start()开始检测，然后进行若干操作，运行Perf.stop停止检测，然后再运行Perf.printWasted()即可打印出浪费性能的组件列表。在项目开发过程中，要经常使用检测工具来看看性能是否正常。

- PureRenderMixin 优化
React 最基本的优化方式
组件中的props和state一旦变化会导致组件重新更新并渲染，但是如果props和state没有变化也的触发更新了（这种情况确实存在，比如调用setState方法，但状态并没有改变），这就导致了无效渲染
```
import React from 'react' ;
import PureRenderMixin from 'react-addons-pure-render-mixin' ;
class List extends React.Component { 
    constructor(props, context) { 
        super(props, context); 
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this); 
    } 
    //...
}
```
重写组件的shouldComponentUpdate函数，在每次更新之前判断props和state，如果有变化则返回true，无变化则返回false。
因此，我们在开发过程中，在每个 React 组件中都尽量使用PureRenderMixin

- Immutable.js 优化
React 的终极优化是使用 Immutable.js 来处理数据，Immutable 实现了 js 中不可变数据的概念（可以去查一下何为“不可变数据”）。
但是也不是所有的场景都适合用它，当我们组件的props和state中的数据结构层次不深（例如普通的数组、对象等）的时候，就没必要用它。但是当数据结构层次很深（例如obj.x.y.a.b = 10这种），你就得考虑使用了。
之所以不轻易使用是，Immutable 定义了一种新的操作数据的语法，如下。和我们平时操作 js 数据完全不一样，而且每个地方都得这么用，学习成本高、易遗漏，风险很高。
```
var map1 = Immutable.Map({a:1, b:2, c:3}); 
var map2 = map1.set('b', 50);
 map1.get('b'); // 2 
 map2.get('b'); // 50
```
因此，建议优化还是要从设计着手，尽量把数据结构设计的扁平一些，这样既有助于优化系统性能，又减少了开发复杂度和开发成本。

### react-router
注意：react-router4.0及以上版本语法有重大改变，老语法会报错
```
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
```
### 目录结构
文件结构：
- 入口文件，源码文件夹app目录下的index.js
需要用redux传递信息的组件用Provider包住
```
const store = configureStore();
render(
  <Provider store={store}>
    <Hello/>
  </Provider>,document.querySelector('#app')
);
```
- constants 常量文件夹
定义了action的type的常量，方便修改复用
```
export const USERINFO_LOGIN='USERINFO_LOGIN';
export const UPDATE_CITY='UPDATE_CITY';
```
- components 木偶组件文件夹
负责渲染视图
- store文件夹
创建store的函数，需要引用reducers目录内的rootReducer
- reducers文件夹
reducers目录下有index.js入口文件，可用combineReducers方法引用多个规则
```
import {combineReducers} from 'redux';
import userinfo from './userinfo';
import userinfo2 from './userinfo';
const rootReducer = combineReducers({userinfo,userinfo2});
export default rootReducer;
```
- actions 文件夹
存放派发方法
```
import * as actionTypes from '../constants/userinfo';
  export function login(data) {
    return {type:actionTypes.USERINFO_LOGIN,data}
  }
  export function updateCity(data) {
    return {type: actionTypes.UPDATE_CITYNAME, data}
  }
```
- containers 页面文件夹
引入constants，引入connect方法和bindActionCreators方法：
```
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as userinfoActions from '../actions/userinfo';
```

connect方法最后需要把组件包装一下再输出，目的是将派发后的状态(userinfo)以及派发时的actions(userinfoActions)当作组件的props传递给组件，userinfo是状态数据，组件根据userinfo渲染视图，userinfoActions是触发状态改变的方法，让组件某事件绑定该方法后就可以有改变状态的能力：
```
function mapStateToProps(state) {//一个自定义函数，最为connect方法的第一个参数
  console.log(state);
  return {userinfo:state.userinfo}; //我的理解：state为rootReducer状态，state.userinfo为rootReducer下的userinfo状态，rootReducer下可以挂载多个规则;state打印结果为一个实例对象，里面有对应的各个规则以及其当前的状态
}
function mapDispatchToProps(dispatch) {//一个自定义函数，最为connect方法的第二个参数
  return {userinfoActions:bindActionCreators(userinfoActions,dispatch)}
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);
```

组件渲染完成后，触发redux状态改变，再重新渲染组件
```
componentDidMount(){
    this.props.userinfoActions.login({
      userid:'aaa',
      city:'北京'
    })
  }
}
```
### fetch
- jquery 不考虑兼容，做dom查询，事件绑定，效果处理
react开发为了用ajax函数去引用jq不值当，而且js中ajax有一个诟病：复杂业务下callback的嵌套问题；fetch是一种可替代ajax获取/提交数据的技术，有些高级浏览器已经可以window.fetch使用，相比与$.ajax更轻量，且原生支持promise，更符合现在的编程习惯
- 解决异步嵌套问题除了promise还有2个方法：
1.es6的generator函数  2.es7的async，await
- fetch的坑
http://blog.csdn.net/whbwhb1/article/details/53322451
```
options = { 
   catchs: 异常处理，控制台抛出的异常是否自己处理：true 是，false 否 由公共方法统一处理优化显示给用户 默认 false 
   credentials: 请求带上cookies，是每次请求保持会话一直 
   method: 请求使用的方法，如 GET、POST 
   headers: 请求的头信息，形式为 Headers 对象或 ByteString。 
   body: 请求的 body 信息：可能是一个 Blob、BufferSource、FormData、URLSearchParams 或者 USVString 对象。注意 GET 或 HEAD 方法的请求不能包含 body 信息。 
   mode: 请求的模式，如 cors、no-cors 或者same-origin。是否允许跨域请求 
   cache:  请求的 cache 模式: default, no-store, reload, no-cache, force-cache, or only-if-cached. 
 } 
```
es6-promise.js可以使它很好的支持IE9以上的版本，IE8 需要改fetch.js源码才能支持（见上一网址博客）
### 前端也需要掌握http
前端涉及到很多的数据操作：数据的获取，数据的提交，数据的安全性，数据性能的优化
### 数据 Mock
在目前互联网行业 web 产品开发中，前后端大部分都是分离开发的，前端开发过程中无法实时得到后端的数据。这种情况下，一般会使用三种方式：
1. 模拟静态数据：即按照既定的数据格式，自己提供一些静态的JSON数据，用相关工具（如fis3）做接口来获取这些数据。该形式使用不比较简单的、只用 get 方法的场景，该项目不适用。
2. 模拟动态接口：即自己用一个 web 框架，按照既定的接口和数据结构的要求，自己模拟后端接口的功能，让前端项目能顺利跑起来。该方式适用于新开发的项目，后端和前端同时开发。
3. 转发线上接口：项目开发中，所有的接口直接用代理获取线上的数据，post 的数据也都直接提交到线上。该方式适用于成熟项目中。


### 最外层组件的作用
在路由配置中，我们有一个最外层组件，App:
```
 <Router history={this.props.history}>
    <Route path='/' component={App}>
        <IndexRoute component={Home}/>
        <Route path='/city' component={City}/>
        <Route path='/User' component={User}/>
        <Route path='/search/:type(/:keyword)' component={Search}/>
        <Route path='/detail/:id' component={Detail}/>
        <Route path='*' component={NotFound}/>
    </Route>
 </Router>
```

其作用是：
- 复用公共的头部尾部组件
```
render() { 
    return (<div> 
            <Head/> 
            {this.props.children} 
            <Footer/> 
        </div>
        )
}
```
- 加载loading组件
```
render() { 
    return ( 
        <div>{this.state.initDone ? this.props.children : <div>正在加载...</div> } 
        </div> 
    )        
}
```
### module.exports与exports，export与export default之间的关系和区别

- CommonJS模块规范
 为了方便，Node为每个模块提供一个exports变量，指向module.exports。可以直接在 exports 对象上添加方法，但是注意，不能直接将exports变量指向一个值，因为这样等于切断了exports与module.exports的联系。
- ES6模块规范
 ```
 // 第一组
 export default function crc32() { // 输出
   // ...
 }
 import crc32 from 'crc32'; // 输入
 
 // 第二组
 export function crc32() { // 输出
   // ...
 };
 import {crc32} from 'crc32'; // 输入
 ```
 上面代码的两组写法，第一组是使用export default时，对应的import语句不需要使用大括号；第二组是不使用export default时，对应的import语句需要使用大括号。
 
 export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次。所以，import命令后面才不用加大括号，因为只可能对应一个方法。
 
 本质上，export default就是输出一个叫做default的变量或方法，然后系统允许你为它取任意名字。
### js:判断为null或者undefined
if(a==null)//这个判断即可
### 开发时候遇到的问题
在开发detail的comment时候，遇到一个问题：
组件结构是 父 => 子: (page)Detail => (subpage)Comment => CommentList => Item
数据是在Comment组件中获取的，fetch获取到数据后，将数据传递给CommentList，再由CommentList传递给Item，由于Item中渲染的虚拟dom中一个参数写错了:
```
let data = this.props.data
<p>{item.comment}</p> {/*将data写成item了*/}
```
结果导致在Comment组件里，获取到数据data后，this.setState({data})不成功，当时是用console.log调试，在setState之前可以获取到数据，但是在setState之后console没有任何反映，而且setState显示也没有生效，当时一直以为是数据的问题，调试了半天，数据肯定没问题，就在子组件找问题，找到后改掉就正常了

debug调试发现，才错误参数渲染之前获取到的数据都是正常的，此时setState还没生效,而控制台也不会报错
我的结论：setState后，由于state变化而导致的虚拟dom变化，虚拟dom因为参数错误而无法渲染时，setState就一直无法完成;这中错误控制台也不会报错，通过再次测试，将Comment组件render里的一个参数故意写错，确实还是一样的状况，且不会报错，在开发中要注意
### this.setState()
http://www.tuicool.com/articles/zEfEfua
setState() 不会立刻改变 this.state ，而是创建一个即将处理的 state 转变。在调用该方法之后访问 this.state 可能会返回现有的值。

this.setState 是在 render 时, state 才会改变调用的, 也就是说, setState 是异步的. 组件在还没有渲染之前, this.setState 还没有被调用.这么做的目的是为了提升性能, 在批量执行 State 转变时让 DOM 渲染更快.

- setState是异步的
很多开发刚开始没有注意到 setState 是异步的。如果你修改一些 state ，然后直接查看它，你会看到之前的 state 。这是 setState 中最容易出错的地方。 setState 这个词看起来并不像是异步的，所以如果你不假思索的用它，可能会造成 bugs 。

另外, setState 函数还可以将一个回调函数作为参数, 当 setState 执行完并且组件重新渲染之后. 这个回调函数会执行, 因此如果想查看通过 setState 改变后的 state, 可以这样写:
```
this.setState({myState: nextState}, ()=>{console.log(this.state.myState)})
```
- setState会造成不必要的渲染
每次调用都会造成重新渲染。很多时候，这些重新渲染是不必要的。不必要的渲染有以下几个原因：
1. 新的 state 其实和之前的是一样的。这个问题通常可以通过 shouldComponentUpdate 来解决。也可以用 pure render 或者其他的库赖解决这个问题。
2. 通常发生改变的 state 是和渲染有关的，但是也有例外。比如，有些数据是根据某些状态来显示的。
3. 有些 state 和渲染一点关系都没有。有一些 state 可能是和事件、 timer ID 有关的。

所以：和渲染无关的状态尽量不要放在 state 中来管理
> 通常 state 中只来管理和渲染有关的状态 ，从而保证 setState 改变的状态都是和渲染有关的状态。这样子就可以避免不必要的重复渲染。其他和渲染无关的状态，可以直接以属性的形式保存在组件中，在需要的时候调用和改变，不会造成渲染。
 避免不必要的修改，当 state 的值没有发生改变的时候，尽量不要使用 setState 。虽然 shouldComponentUpdate 和 PureComponent 可以避免不必要的重复渲染，但是还是增加了一层 shallowEqual 的调用，造成多余的浪费。

###