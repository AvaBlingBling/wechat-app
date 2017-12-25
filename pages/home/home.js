const md5 = require('../../utils/md5.js')
const http = require('../../utils/http.js')
const config = require('../port.js')

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../images/1.jpg',
      '../images/2.jpg',
      '../images/3.jpg'
    ],
    newArrival:{
      pic1: '../images/1.jpg',
      pic2: '../images/2.jpg',
      pic3: '../images/3.jpg',
      pic4:'../images/4.jpg'
    },
    curIndex: '0',//记录tab当前页
    products: [{
      id:1,
      url:'../product/detail',
      imgurl:'../images/1.jpg',
      text:'新款施华洛世奇恶魔之眼手环',
      price:500,
      initial:1600
    }, {
      id: 2,
      url: '../product/detail',
      imgurl: '../images/2.jpg',
      text: '新款施华洛世奇恶魔之眼手环',
      price: 500,
      initial: 1600
    }],
  },
  tabFun: function (e){
    // const hash = md5.hex_md5("123dafd");
    // console.log(hash);
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
    // http.getService(config.port+'/cssconfig',(data)=>{
    //   console.log(data);
    //   this.setData({
    //     products: data
    //   })
    // });
    //获取每日上新的图片
    //获取轮播图的图片
  },
})
