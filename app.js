//app.js
const md5 = require('./utils/md5');

function md(obj) {
  let temp;//加密前拼接字符串
  //字典排序
  var kobj = Object.keys(obj).sort();
  for (let k in kobj) {
    temp += '&' + kobj[k] + "=" + obj[kobj[k]];
  }
  return md5.hex_md5(temp.substring(1));
}

App({
  onLaunch: function () {
    // console.log('App Launch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    //以GET方法为例
    let queryString = {
      api_method: 'get',
      timestamp: '1498558053507',
      query: 'aa = 111 & bbb=123123',
      access_token: '123456',
    };
    let certifyString = {
      account: '123456789',
      timestamp: '1498558053507',
      client_id: 'wx.mall',
      access_token: '123456',
    };
    const query = md(queryString).substring(2, 12);
    const _certify = md(certifyString);
    const certify = _certify.substring(0, 9) + _certify.substring(19, 32);
    const signature = query + certify;
    // wx.login({
    //   success: function (loginres) {
    //     if (loginres.code) {
    //       //发起网络请求
    //       console.log(loginres)
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code',
    //         data: {
    //           appid:'wxaa30c4cf8edae5ab',
    //           secret:'45f8f85cc4367cf773af835edb8a4648',
    //           js_code: loginres.code,
    //           grant_type:'authorization_code'
    //         },
    //         success:data=>{
    //           console.log(data.data.openid);
    //           wx.getUserInfo({
    //             success: res => {
    //               console.log(res)
    //               const postData = {
    //                 vid:res.iv,
    //                 openId: data.data.openid,
    //                 openway:'',
    //                 platform:'',
    //                 unionid:'',
    //                 nickName: res.nickName,
    //                 avatar: res.avatarUrl,
    //                 account:''
    //               }
    //               wx.request({
    //                 url: 'bv/bvmember.auth',
    //                 data: postData,
    //                 success:(log)=>{
    //                   console.log(log)
    //                 }
    //               })
    //             }
    //           })
    //         }
    //       })
          
    //     } else {
    //       console.log('获取用户登录态失败！' + res.errMsg)
    //     }
    //   }
    // })
  },
  getUserInfo: function (cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  onShow: function () {
    // console.log('App Show')
  },
  onHide: function () {
    // console.log('App Hide')
  },
  globalData: {
    userInfo: null
  }
})
