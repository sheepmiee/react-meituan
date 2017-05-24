import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

import Star from '../../Star';

export default class Item extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state={
      commentState:2,
      star:0,
      submitState:0
    }
  }

  render() {
    let star = this.state.star;
    let submitState = this.state.submitState;
    let item = this.props.item;
    let commentState = this.state.commentState;
    let starText = star===1?'“非常差”'
      :star===2?'“很差”'
      :star===3?'“一般”'
      :star===4?'“很好”'
      :star===5?'“非常好”':'';
    let submitText = submitState===1?'客官，给个星嘛~'
      :submitState===2?'客官，说句话嘛~':'';
    return (
      <div className="order-list-item clear-fix">
        <div className="clear-fix">
        <div className="img-con float-left">
          <img src={item.img}/>
        </div>
        <div className="order-info float-left">
          <p>商户：{item.title}</p>
          <p>数量：{item.count}</p>
          <p>价格：￥{item.price}</p>
        </div>
        <div className="button-con">
          {commentState===0
            ?<button className="float-right theme-background" onClick={this.showComment.bind(this)}>评价</button>
            :commentState===1?'':<button className="float-right gray">已评价</button>
          }

        </div>
       </div>
        {
          commentState===1
            ?<div className="comment-text-con">
            <div className="star-con">
              {star===0?'':<span>{starText}</span>}
              <br/>
              <Star star={this.state.star} changeStar={this.changeStar.bind(this)}/>
            </div>
            <textarea ref="commentText"></textarea>
            <span className="submit-text">{submitText}</span>
            <button className="btn theme-background float-right" onClick={this.commentSubmit.bind(this)}>提交</button>
            <button className="btn gray float-right" onClick={this.hideComment.bind(this)}>取消</button>
          </div>:''
        }
      </div>
    )
  }
  componentDidMount(){
    let commentState = this.props.item.commentState;
    this.setState({
      commentState
    })
  }
  showComment(){
    this.setState({
      commentState:1
    })
  }
  hideComment(){
    this.setState({
      commentState:0,
      star:0,
      submitState:0
    })
  }
  changeStar(star){
    this.setState({
      star
    });
    console.log(this.state.star);
  }
  commentSubmit(){
    let id=this.props.item.id;
    let star = this.state.star;
    let value = this.refs.commentText.value.trim();
    let submitCallback = this.submitCallback.bind(this);
    if(star === 0){
      this.setState({submitState:1});
      return
    }
    if(!value){
      this.setState({submitState:2});
      return
    }
    this.props.commentSubmit(id,value,star,submitCallback);
  }
  submitCallback(){
    this.setState({
      commentState: 2
    })
  }
}