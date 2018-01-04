const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
	data: {
		haList:false,//购物车列表是否有数据
		products:[],//购物车列表
		closetotal:0,//总价初始为0
		freight:0,//是否包含运费默认为0(不包含)
		selectAllStatus:true,//全选状态,默认为全选
	},

	/**
   * 生命周期函数--监听页面显示
   */
	onShow: function () {//页面加载时发送请求获取购物车列表数据
		this.setData({
			hasList: true,
			products: [{
				imgurls: '/images/3.jpg',
				text: '有机食物大礼包',
				weight: '500g,春节喜庆礼包',
				prise: 222,
				amount: 2,
				id: "0",
				selected: true,
				index:0,
			}, {
				imgurls: '/images/3.jpg',
				text: '有机食物大礼包',
				weight: '500g,春节喜庆礼包',
				prise: 333,
				amount: 3,
				check: false,
				id: "1",
				selected: true,
				index:1,
			}, {
				imgurls: '/images/3.jpg',
				text: '有机食物大礼包',
				weight: '500g,春节喜庆礼包',
				prise: 444,
				amount: 1,
				check: false,
				id: "2",
				selected: true,
				index:2,
			}],
		});
		this.toast();//计算总价
	},

	// 计算总价
	toast: function () {
		let products = this.data.products;//获取购物车列表数据
		let closetotal = 0;
		for(let i=0;i<products.length;i++){
			if (products[i].selected){
				closetotal += products[i].prise * products[i].amount;
			}
		}
		this.setData({//重新设置购物车列表数据
			products:products,
			closetotal: closetotal.toFixed(2)
		})
	},

	// 删除商品
	modalcnt: function (e) {
		let self = this;//保存this
		let index = e.currentTarget.dataset.index;//获取当前点击按钮的index
		let products = self.data.products;
		wx.showModal({
			title: '提示',
			content: '确认删除该订单',
			success: function (res) {				
				if (res.confirm) {
					console.log(index);
          let prod = [];
          for(let product of products){
            if (product.index !== index){
              prod.push(product);
            }
          }
					// products.splice(index,1);//删除当前数据
					self.setData({//重新设置购物车列表
            products: prod
					});
					// let slectAll = true;//查询所有商品是否全部选中
					// for (let i = 0; i < products.length; i++) {
					// 	if (!products[i].selected) {
					// 		slectAll = products[i].selected;
					// 	}
					// };
					// self.setData({//设置全选按钮
					// 	selectAllStatus: slectAll
					// });
					self.toast();//重新计算总价
				} else if (res.cancel) {
					console.log('用户点击取消')
				}
			}
		});
		if(products.length <= 1){//如果当前购物车没有数据
			self.setData({//显示空页面
				hasList:false
			})
		}
	},

	// 选中商品
	selectList(e){
		const index = e.currentTarget.dataset.index;
		let products = this.data.products;
		let slectAll = true;
		const selected = products[index].selected;
		let selectAllStatus = this.data.selectAllStatus;
		products[index].selected = !selected;
		this.setData({
			products:products,
		});
		for(let i=0;i<products.length;i++){
			if (!products[i].selected){
				slectAll = products[i].selected;
			}
		}
		this.setData({
			selectAllStatus: slectAll
		})
		this.toast();
	},

	// 全选
	selectAll(e){
		let selectAllStatus = this.data.selectAllStatus;
		selectAllStatus = !selectAllStatus;
		let products = this.data.products;
		for(let i=0;i<products.length;i++){
			products[i].selected = selectAllStatus;
		}
		this.setData({
			products:products,
			selectAllStatus: selectAllStatus
		});
		this.toast();
	},

	// checkboxChange:function(e){
	// 	console.log(e.target.dataset.index);
	// 	if(e.detail.value.length > 0){
	// 		let price = parseFloat(e.detail.value);
	// 		let closetotal = parseFloat(this.data.closetotal);
	// 		closetotal += parseFloat(e.detail.value);
	// 		console.log(closetotal);
	// 		this.setData({ closetotal: closetotal.toFixed(2)});
	// 		wx.createSelectorQuery().select("#b").boundingClientRect(function(rect){
	// 			console.log(rect.dataset.price)
	// 		}).exec()
	// 	}else{
	// 		var that = this;
	// 		wx.createSelectorQuery().select("#b").boundingClientRect(function(rect){
	// 			let closetotal = parseFloat(that.data.closetotal);
	// 			let price = parseFloat(rect.dataset.price);
	// 			closetotal -= price;
	// 			that.setData({closetotal:closetotal});
	// 		}).exec()
	// 	}
	// },
	// change:function(e){
	// 	var index = e.target.id;
	// 	console.log(index);
	// 	console.log(this.data.products[index].icontype);
	// 	this.setData({"products[2].icontype":"success"})
	// },

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