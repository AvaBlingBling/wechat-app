const app = getApp()//获取应用实例

Page({
	data:{
		imgUrls:[//轮播图
			{ id: 1, src: "../../images/1.jpg" },
			{ id: 1, src: "../../images/1.jpg" },
			{ id: 1, src: "../../images/1.jpg" },
			{ id: 1, src: "../../images/1.jpg" }
		],
    productDetails:{
      describe:"这里是商品介绍,包括商品详细信息,产品规格,品牌介绍,商品图片,视频等等",
      imgsrc:"../../images/4.jpg"
    },
    pcontent:{
      title:"有机食物大集合 | 健康过冬",
      subtitle:"超人气 精选 营养",
      newPrice: 233,
      usedPrice: 366,
      groupPrice: 199,
      carriage:0
    },
    buy: {
      productname: "有机食物大礼包",
      specification: "500g",
      color: "高级灰",
      num: 1,
      img: "../../images/1.jpg",
      surplus: 10//库存
    },
		indicatorDots:true,//显示面板指示点
		autoplay:true,//自动轮播
		interval:3000,//轮播时间间隔
		duration:500,//单张图片动画时长
		circular:true,//衔接滑动
		shadeshow:false,
    buyshow:false,
	},
	show:function(){
		this.setData({shadeshow:true});
	},
	hide:function(){
		this.setData({shadeshow:false});
	},
  showbuy:function(){
    this.setData({buyshow:true})
  },
  buyhide:function(){
    this.setData({buyshow:false})
  },
  plus: function () {
    this.data.buy.num++;
    console.log();
    this.setData({ 'buy.num': this.data.buy.num })
  },
  minus: function () {
    this.data.buy.num--;
    this.setData({ 'buy.num': this.data.buy.num });
  },
  buy_confirm: function () {
    var that = this;
    wx.showLoading({
      title:"加载中",
      mask:true,
      success:function(){
        setTimeout(function () { 
          wx.hideLoading(); 
          that.setData({ buyshow: false });
          wx.showModal({
            title:"购买提示",
            content:"确认购买该产品",
            success:function(res){
              if(res.confirm){
                wx.showToast({
                  title:"购买成功",
                  duration:2000,
                  mask:true,
                  icon:"success"
                })
              }
            }
          })
        },2000);
      }
    })
  }
})