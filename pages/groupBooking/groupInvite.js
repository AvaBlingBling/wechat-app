const app = getApp()//获取实例

Page({
	data: {
    pcontent: {
      title: "有机食物大集合 | 健康过冬",
      subtitle: "超人气 精选 营养",
      newPrice: 233,
      usedPrice: 366,
      groupPrice: 199,
      carriage: 0
    },
    buy:{
      productname: "有机食物大礼包",
      specification: "500g",
      color: "高级灰",
      num: 1,
      img: "../../images/1.jpg",
      surplus: 10//库存
    },
    productDetails:{
      describe: "这里是商品介绍,包括商品详细信息,产品规格,品牌介绍,商品图片,视频等等",
      imgsrc: "../../images/4.jpg"
    },
    colonelHead: "../../images/my/tou.png",
		personNum: 1,
		badPersonNum:1,
		shadeshow: false,
		buyshow:false,
	},
	show: function () {
		this.setData({ shadeshow: true })
	},
	hide: function () {
		this.setData({ shadeshow: false })
	},
	InviteFriends:function(){
		this.setData({buyshow:true})
	},
	buyhide:function(){
		this.setData({buyshow:false})
	},
	plus:function(){
		this.data.buy.num++;
		this.setData({ 'buy.num':this.data.buy.num})
	},
	minus:function(){
		this.data.buy.num--;
		this.setData({ 'buy.num': this.data.buy.num});
	},
	buy_confirm:function(){
		console.log("发起请求");
	}
})