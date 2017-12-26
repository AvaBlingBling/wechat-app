// pages/product/addAddress.js
const data = require('../../utils/area');
const { address } = require('../model/model');
// console.log(data.area)

Page({
  /**
   * 页面的初始数据
   */
  data: {
    area: data.area,
    provinceIndex: 0,//地区选择器省份下标index
    province: '',//地区选择器选择的省份名
    cityIndex: 0,
    city: '',
    zoneIndex: 0,
    zone: '',
    showProvince: false,
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    wx.navigateBack();
  },
  formReset: function () {
    console.log('form发生了reset事件')
  },
  selectProvince:function(){
    this.setData({
      showProvince: true
    })
    
  }, 
  cancel: function () {
    this.setData({
      showProvince: false
    })
  },
  confirm: function(){
    const { area, provinceIndex, cityIndex, zoneIndex} = this.data;
    const provinceName = area[provinceIndex].name;
    const cityName = area[provinceIndex].sub[cityIndex].name;
    const zoneName = area[provinceIndex].sub[cityIndex].sub[zoneIndex].name;
    this.setData({
      showProvince:false,
      province: provinceName,
      city: cityName,
      zone: zoneName
    });
    // console.log(area[provinceIndex].sub)
  },
  bindChange: function(e){
    // console.log(e.detail.value[0]);
    const val = e.detail.value;
    let provinceIndex = val[0], 
        cityIndex = val[1], 
        zoneIndex = val[2];
    this.setData({
      provinceIndex,
      cityIndex,
      zoneIndex
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.id){
      //假数据
      this.setData({ ...address})
      wx.setNavigationBarTitle({
        title: '修改收货地址'
      })
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
  
  },
})