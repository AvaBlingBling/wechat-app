const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
	data: {
		curIndex: '0',
		products: [{
			imgurls: '/images/3.jpg',
			text: '有机食物大礼包',
			weight: '500g,春节喜庆礼包',
			prise: '222',
			amount: '1',
			check: false,
		}, {
			imgurls: '/images/3.jpg',
			text: '有机食物大礼包',
			weight: '500g,春节喜庆礼包',
			prise: '333',
			amount: '1',
			check: false,
		}, {
			imgurls: '/images/3.jpg',
			text: '有机食物大礼包',
			weight: '500g,春节喜庆礼包',
			prise: '444',
			amount: '1',
			check: false,
		}],
		closetotal:"0",
		freight:0,
	},
	tab: function (e) {
		const curIndex = e.target.dataset.id
		if (curIndex !== "") {
			this.setData({
				curIndex: curIndex
			})
		}
	},
	toast: function () {
		
	},
	// 删除商品
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
	// 选中商品
	checkboxChange:function(e){
		console.log(e.target.dataset);
		if(e.detail.value != ""){
			var price = parseFloat(e.detail.value);
			var closetotal = parseFloat(this.data.closetotal);
			closetotal += parseFloat(e.detail.value);
			console.log(closetotal);
			this.setData({ closetotal: closetotal})
		}else{
			console.log(e);
		}
	},
	change:function(e){
		for (let i = 0; i < this.data.products.length;i++){
			this.setData({"products[i].check":true});
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