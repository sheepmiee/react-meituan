import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router';
import './style.less';

export default class Category extends React.Component{
  constructor(props,context){
    super(props,context);
    this.state={index:0};
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  render(){
    let opt = {
      continuous:false,
      callback:(index)=>{
        this.setState({index});
      }
    };
    let page0 = [
      {src:"http://i4.buimg.com/594512/51d1d3cfb97480b4.png",title:"美食",link:"/search/meishi"},
      {src:"http://i4.buimg.com/594512/2434e4c60902dddd.png",title:"猫眼电影",link:"/search/maoyan"},
      {src:"http://i4.buimg.com/594512/280044e74f3fdd28.png",title:"酒店",link:"/search/jiudian"},
      {src:"http://i4.buimg.com/594512/8a9ad7cd2825f19a.png",title:"休闲娱乐",link:"/search/xiuxian"},
      {src:"http://i4.buimg.com/594512/385ef1f8dde761e3.png",title:"外卖",link:"/search/waimai"},
      {src:"http://i4.buimg.com/594512/58859317ee784cf8.png",title:"火锅",link:"/search/huoguo"},
      {src:"http://i4.buimg.com/594512/2b66c3a754b5312d.png",title:"丽人",link:"/search/liren"},
      {src:"http://i4.buimg.com/594512/60a67c9819e80ac8.png",title:"周边游",link:"/search/zhoubianyou"},
      {src:"http://i4.buimg.com/594512/300df487b4c8541c.png",title:"KTV",link:"/search/ktv"},
      {src:"http://i4.buimg.com/594512/9f74649f11201c4d.png",title:"婚纱摄影",link:"/search/hunsha"}
    ];
    let page1 = [
      {src:"http://i4.buimg.com/594512/3af8cf6182205680.png",title:"生活服务",link:"/search/shenghuo"},
      {src:"http://i4.buimg.com/594512/e374d2c37db7b436.png",title:"景点",link:"/search/jingdian"},
      {src:"http://i4.buimg.com/594512/d0e34d37a11e507e.png",title:"爱车",link:"/search/aiche"},
      {src:"http://i4.buimg.com/594512/a1bf70a239101233.png",title:"运动健身",link:"/search/yundong"},
      {src:"http://i4.buimg.com/594512/8c4d7f064b698478.png",title:"购物",link:"/search/gouwu"},
      {src:"http://i4.buimg.com/594512/9384c47fcaf139bd.png",title:"亲子",link:"/search/qinzi"},
      {src:"http://i4.buimg.com/594512/c5129d560ae71aae.png",title:"嫁妆",link:"/search/jiazhuang"},
      {src:"http://i4.buimg.com/594512/6c4a894f44f52136.png",title:"学习培训",link:"/search/xuexi"},
      {src:"http://i4.buimg.com/594512/deb04cecffa8073f.png",title:"医疗健康",link:"/search/yiliao"},
      {src:"http://i4.buimg.com/594512/0761e9e77dc85b34.png",title:"到家",link:"/search/daojia"}
    ];
    let page2 = [
      {src:"http://i4.buimg.com/594512/1faa5468ece65f4c.png",title:"小吃快餐",link:"/search/xiaoche"},
      {src:"http://i4.buimg.com/594512/d1415728146beb0d.png",title:"自助餐",link:"/search/zizhu"},
      {src:"http://i4.buimg.com/594512/e4ae941f52872ab8.png",title:"日本菜",link:"/search/rebencai"},
      {src:"http://i4.buimg.com/594512/9107ea075e98758e.png",title:"美发",link:"/search/meifa"},
      {src:"http://i4.buimg.com/594512/b5944f0ab051a50c.png",title:"美甲",link:"/search/meijia"},
      {src:"http://i4.buimg.com/594512/a01c0a1e603b352c.png",title:"美容SPA",link:"/search/spa"},
      {src:"http://i4.buimg.com/594512/c3c8248dfd949a8f.png",title:"瘦身纤体",link:"/search/shoushen"},
      {src:"http://i4.buimg.com/594512/06f2c7f981e3fd64.png",title:"亲子摄影",link:"/search/qinzisheying"},
      {src:"http://i4.buimg.com/594512/42fcd20ec09ea6a2.png",title:"亲子游乐",link:"/search/qinziyoule"},
      {src:"http://i2.muimg.com/594512/befc19bad85596c0.png",title:"全部分类",link:"/search/quanbu"}
    ];
    return (
      <div id="home-category">
        <ReactSwipe className="carousel" swipeOptions={opt}>
          <div className="carousel-item">
            <ul className="clear-fix">
              {page0.map((item,index)=>(
                <Link key={index} to={item.link}>
                  <li style={{backgroundImage:"url("+item.src+")"}}>{item.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              {page1.map((item,index)=>(
                <Link key={index} to={item.link}>
                  <li style={{backgroundImage:"url("+item.src+")"}}>{item.title}</li>
                </Link>              ))}
            </ul>
          </div>
          <div className="carousel-item">
            <ul className="clear-fix">
              {page2.map((item,index)=>(
                <Link key={index} to={item.link}>
                  <li style={{backgroundImage:"url("+item.src+")"}}>{item.title}</li>
                </Link>              ))}
            </ul>
          </div>
        </ReactSwipe>
        <div className="index-container">
          <ul>
            <li className={this.state.index === 0 ? "theme-background" : ''}></li>
            <li className={this.state.index === 1 ? "theme-background" : ''}></li>
            <li className={this.state.index === 2 ? "theme-background" : ''}></li>
          </ul>
        </div>
      </div>

    )
  }
}
