const app = getApp()//获取实例

Page({
	data:{
		newPrice:233,
		groupPrice:199,
		personNum:1,
		shadeshow:false,
		img: "../../images/1.jpg",
		colonelHead: "../../images/my/tou.png"
	},
	show:function(){
		this.setData({shadeshow:true})
	},
	hide:function(){
		this.setData({shadeshow:false})
	},
	InviteFriends:function(){
    wx.navigateTo({
			url: 'groupInvite',
		})
	}
})