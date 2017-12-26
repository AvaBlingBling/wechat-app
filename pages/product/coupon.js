// pages/product/coupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex: '0',//记录tab当前页
    coupon:[{
      desc:'满399-100元',
      discount: 100,
      condition:'满399可用',
      validity: '2017.12.12-2017.12.30',
    }, {
      desc: '满399-50元',
      discount: 50,
      condition: '满399可用',
      validity: '2017.12.12-2017.12.30',
    }, {
      desc: '满399-30元',
      discount: 30,
      condition: '满399可用',
      validity: '2017.12.12-2017.12.30',
    }]
  },
  //选择优惠券跳转
  bindCoupon: function (e) {
    const coupon = e.currentTarget.dataset.desc;
    wx.navigateTo({
      url: './confirm?coupon=' + coupon,
    });
  },

  tabFun: function (e) {
    const curIndex = e.target.dataset.id;
    if (curIndex !== '') {
      this.setData({
        curIndex: curIndex
      })
    }
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
  
  }
})