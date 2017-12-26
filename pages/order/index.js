// pages/order/index.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    curIndex:'0',
    products:[{
      numbers:'473489348948',
      state:'等待买家付款',
      imgurls:'/images/food.jpg',
      text:'有机食物大礼包',
      weight:'500g,春节喜庆礼包',
      prise:'233',
      amount:'1',
      total:'233',
      pay: '去付款',
      cancel: '取消订单'
    },{
        numbers: '473489348948',
        state: '交易完成',
        imgurls: '/images/food.jpg',
        text: '有机食物大礼包',
        weight: '500g,春节喜庆礼包',
        prise: '233',
        amount: '1',
        total: '233',
        pay:'退款',
        cancel:'删除订单'
    
    },{
        numbers: '473489348948',
        state: '等待买家付款',
        imgurls: '/images/food.jpg',
        text: '有机食物大礼包',
        weight: '500g,春节喜庆礼包',
        prise: '233',
        amount: '1',
        total: '233',
        cancel: '删除订单'
    }]
  
  },
  tab:function(e){
    const curIndex =e.target.dataset.id
    if(curIndex!==""){
      this.setData({
        curIndex:curIndex
      })
    }
  },
  toast: function () {
    wx.navigateTo({
      url: '../orderdetails/index'
    })
  },
  modalcnt: function () {
    wx.showModal({
      title: '提示',
      content: '确认删除该订单',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },  
  refund: function () {
    wx.showModal({
      title: '提示',
      content: '确认发起退款吗？',
      success: function (res) {
        if (res.confirm) {
          console.log(res)
          wx.showModal({
            title: '提示',
            content: '退款申请已成功发起，系统会在1-2个工作日内完成退款',
            showCancel:false,
            success:function(res){
              if(res.confirm){
                console.log("queding")
              }
            }
          })
          
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
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
  
  }
})