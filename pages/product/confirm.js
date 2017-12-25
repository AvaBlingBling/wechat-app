// pages/product/confirm.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderPage: {
      img: '../images/1.jpg',
      text: '有机食物大礼包',
      price: 300,
      size: '500g',
      color: '高级灰',
      count: 1,
    },
  },
  //新建地址
  addAddress: function(){
    wx.navigateTo({
      url: './addAddress',
    })
  },
  //运费
  freight: function(){
    wx.showModal({
      title: '运费详情',
      content: `预计到货时长：3-5个工作日；快递公司：顺丰；计价规则：一件以内0元，每加一件加0元，适用于以下地区：北京，上海`,
      showCancel:false,
      confirmText:'OK',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //优惠券
  coupon:function(){
    wx.navigateTo({
      url: './coupon',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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