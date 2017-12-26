// pages/product/detail.js
const http = require('../../utils/http.js')
const md5 = require('../../utils/md5.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    imgUrls: [
      '../../images/1.jpg',
      '../../images/1.jpg',
      '../../images/1.jpg'
    ],
    pcontent: {
      title: '有机食物大集合 | 健康过冬',
      subtitle: '超人气 精选 营养',
      price: 230,
      initial: 466,
      carriage: 0,
      remain: 183,
      sales: 14,
      discription: '<p style="font-size:0.7rem"><p>这里是商品介绍，你可以输入很多商品详情信息。</p><p>如产品规格、品牌介绍、商品图片、视频等。</p><br/><p>如果你无法简洁的表达你的想法,那只说明你还不够了解它。</p><p>-- 阿尔伯特·爱因斯坦</p><br/><p>如果你无法简洁的表达你的想法，那只说明你还不够了解它。</p><p>--阿尔伯特·爱因斯坦</p><img src="https://github.com/oopsguy/wechat-app-examples/blob/master/resources/cover.png?raw=true" width="100%"/></p>'
    },
    orderPage:{
      img: '../../images/1.jpg',
      text: '有机食物大礼包',
      price: 300,
      size: ['300g','500g'],
      color: ['礼包红','高级灰'],
      remain: 9,
    },
    customOrder:{
      count:1,
    },
    showOrderPage: false,
  },
  joinOrders: function (){
    // const id = this.data.id;
    this.setData({ showOrderPage: true});
  },
  clear: function () {
    // const id = this.data.id;
    this.setData({ showOrderPage: false });
  },
  confirm: function () {
    // const id = this.data.id;
    this.setData({ showOrderPage: false });
    // wx.showToast({
    //   title: '添加成功！',
    //   icon: 'success',
    //   duration: 2000
    // })
    wx.redirectTo({
      url: './confirm'
    })
  },
  selectSize: function (e){
    const index = e.target.dataset.index;
    let customOrder = this.data.customOrder;
    customOrder['size'] = index;
    this.setData({
      customOrder: customOrder
    })
  },
  selectColor: function (e) {
    const index = e.target.dataset.index;
    let customOrder = this.data.customOrder;
    customOrder['color'] = index;
    this.setData({
      customOrder: customOrder
    })
  },
  changeCount: function (e) {
    const id = e.target.id;
    let customOrder = this.data.customOrder;
    if(id === 'sub'){
      customOrder['count'] -= 1;
      // if (customOrder['count'] && customOrder['count']>1){
      //   customOrder['count'] -= 1;
      // }
    } else if (id === 'add'){
      customOrder['count'] += 1;
      // if (this.data.orderPage.remain > customOrder['count']){
      //   customOrder['count'] += 1;
      // }
    }
    this.setData({
      customOrder: customOrder
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    if(options.id){
      // http.getService('',(data)=>{
      //   this.setData({
      //     id: options.id,
      //   })
      // });
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
// function md(obj) {
//   let temp;//加密前拼接字符串
//   //字典排序
//   var kobj = Object.keys(obj).sort();
//   for (let k in kobj) {
//     temp += '&' + kobj[k] + "=" + obj[kobj[k]];
//   }
//   return md5.hex_md5(temp.substring(1));
// }
// //以GET方法为例
// let queryString = {
//   api_method: 'get',
//   timestamp: '1498558053507',
//   query: 'aa = 111 & bbb=123123',
//   access_token: '123456',
// };
// let certifyString = {
//   account: '123456789',
//   timestamp: '1498558053507',
//   client_id: 'wx.mall',
//   access_token: '123456',
// };
// const query = md(queryString).substring(2, 12);
// const _certify = md(certifyString);
// const certify = _certify.substring(0, 9) + _certify.substring(19, 32);
// const signature = query + certify;
// console.log(signature);

// wx.request({
//   url: 'http://192.168.0.46:8080/user/123456789',
//   header: {
//     'Accept': 'application/json',
//     'AppKey': 'menya.mall',
//     'Rest-Auth': {
//       'account': '123456789',
//       'client_id': 'wx.mall',
//       'timestamp': '1498558053507',
//       'signature': signature,
//     },
//   },
//   success: (res) => {
//     console.log(res);
//   },
//   fail: (err) => {
//     console.error(err);
//   }
// })