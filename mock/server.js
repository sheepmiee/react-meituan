var app = require('koa')();
var router = require('koa-router')();


// 首页广告（超值特惠）
var homeAdData = require('./home/ad.js');
router.get('/api/homead', function *(next) {
    console.log('首页 —— 广告（超值特惠）');
    this.body = homeAdData
});

// 首页列表（猜你喜欢）
var homeListData = require('./home/list.js');
router.get('/api/homelist/:city/:page', function *(next) {
    console.log('首页 —— 推荐列表（猜你喜欢）');
    let params = this.params;
    let paramsCity = params.city;
    let paramsPage = params.page;

    console.log('当前城市：' + paramsCity);
    console.log('当前页数：' + paramsPage);

    this.body = homeListData
});

// 搜索结果页(三个参数)
var searchListData = require('./search/list.js');
router.get('/api/search/:page/:city/:category/:keyword', function *(next) {
    console.log('搜索结果页 - 搜索结果');

    // 参数
    let params = this.params;
    let paramsPage = params.page;
    let paramsCity = params.city;
    let paramsCategory = params.category;
    let paramsKeyword = params.keyword;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);
    console.log('关键字：' + paramsKeyword);

    this.body = searchListData
});

// 搜索结果页(两个参数)let
router.get('/api/search/:page/:city/:category', function *(next) {
    console.log('搜索结果页 - 搜索结果');

    // 参数
    let params = this.params;
    let paramsPage = params.page;
    let paramsCity = params.city;
    let paramsCategory = params.category;

    console.log('当前页数：' + paramsPage);
    console.log('当前城市：' + paramsCity);
    console.log('当前类别：' + paramsCategory);

    this.body = searchListData
});

// 详情页
let detailInfo = require('./detail/info.js');
router.get('/api/detail/info/:id', function *(next) {
    console.log('详情页 - 商户信息');

    let params = this.params;
    let id = params.id;

    console.log('商户id: ' + id);

    this.body = detailInfo
});
// 详情页 - 用户评论
const detailComment = require('./detail/comment.js');
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评');

    let params = this.params;
    let page = params.page;
    let id = params.id;

    console.log('商户id: ' + id);
    console.log('当前页数: ' + page);

    this.body = detailComment
});

// 订单列表
let orderList = require('./orderlist/orderList.js');
router.get('/api/orderlist/:username', function *(next) {
    console.log('订单列表');

    let params = this.params;
    let username = params.username;
    console.log('用户名：' + username);

    this.body = orderList
});

// 提交评论
let commentSubmitResponse = {errno: 0, msg: 'ok'};
router.post('/api/submitComment', function *(next) {
    console.log('提交评论');

    this.body = commentSubmitResponse;
});

// 启动服务生成路由
app.use(router.routes())
   .use(router.allowedMethods());
app.listen(3000);
