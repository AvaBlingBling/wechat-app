const md5 = require('../../utils/md5.js')
const http = require('../../utils/http.js')

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    coupon: [{
      receive:true,
      discount:50,
      desc:'满399可用'
    },{
      receive:false,
      discount:50,
      desc:'满399可用'
    }, {
      receive:false,
      discount: 50,
      desc: '满399可用'
    }, {
      receive:false,
      discount: 50,
      desc: '满399可用'
    }],
    flashSale: [{
      robbed: true,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    },{
      robbed: false,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    }, {
      robbed: false,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    }],
    pintuan: [{
      robbed: true,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    }, {
      robbed: false,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    }, {
      robbed: false,
      imgurl: '../../images/1.jpg',
      price: 59,
      initial: 98,
      accout: 30,
      desc: '新款施华洛世奇恶新款施华洛世奇恶魔之眼手环',
      time: '12号13:00开抢'
    }],
    imgUrls: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg'
    ],
    newArrival:{
      pic1: '../../images/1.jpg',
      pic2: '../../images/2.jpg',
      pic3: '../../images/3.jpg',
      pic4:'../../images/4.jpg'
    },
    curIndex: '0',//记录tab当前页
    products: [{
      id:1,
      url:'../product/detail',
      imgurl:'../../images/1.jpg',
      text:'新款施华洛世奇恶魔之眼手环新款施华洛世奇恶魔之眼手环新款施华洛世奇恶魔之眼手环',
      price:500,
      initial:1600
    }, {
      id: 2,
      url: '../product/detail',
      imgurl: '../../images/2.jpg',
      text: '新款施华洛世奇恶魔之眼手环',
      price: 500,
      initial: 1600
    }],
  },
  //领取优惠券
  receive: function(e){
    const idx = e.currentTarget.dataset.index;
    let coupon = this.data.coupon;
    coupon[idx].receive = true;
    this.setData({ coupon});
    wx.showToast({
      title: '领取成功',
      icon: 'success',
      duration: 2000
    })
  },
  //tab页切换
  tabFun: function (e){
    const curIndex = e.target.dataset.id;
    if (curIndex !== ''){
      this.setData({
        curIndex: curIndex
      })
    }
  },
  contacttap: function (res){
    console.log(res);
  },
  onLoad: function () {
    //先获取护肤产品的数据
    //获取每日上新的图片
    //获取轮播图的图片
    app.getUserInfo((data)=>{
      wx.login({
        success: function (res) {
          if (res.code) {
            const postData = {
              code: res.code,
              avatar: data.avatarUrl,
              nickName: data.nickName,
              province: data.province,
              city: data.city,
              gender: data.gender
            }
            http.postService({
              url: 'http://192.168.0.46:8080/1.0/register',
              account: '123456789',
              api_method: '1.0/register',
            }, postData, (data) => {
              console.log(data);
            });

          } else {
            console.log('获取用户登录态失败！' + res.errMsg)
          }
        }
      });
      
    })
    
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '门牙精选',
      path: '/pages/home/home',
      success: function (res) {
        // 转发成功
        console.log(res)
      },
      fail: function (res) {
        // 转发失败
        console.log(res)
      }
    }
  },
})
