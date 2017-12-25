const md5 = require("./utils/md5.js")
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    const date = new Date().getTime();
    //以GET方法为例
    let queryString = {
      api_method: 'user/123456789',
      timestamp: date
    };
    let certifyString = {
      account: '123456789',
      timestamp: date,
      client_id: 'wx.mall',
      access_token: '123456',
    };
    const query = md(queryString).substring(2, 12);
    const _certify = md(certifyString);
    const certify = _certify.substring(0, 9) + _certify.substring(19, 32);
    const signature = query + certify;
    // console.log(date,signature);

    // wx.request({
    //   url: 'http://192.168.0.46:8080/',
    //   header: {
    //     'Accept': 'application/json',
    //     'AppKey': 'menya.mall',
    //     'Rest-Auth': 'account=123456789,client_id=wx.mall,timestamp=' + date + ',signature=' + signature
    //   },
    //   success: (res) => {
    //     console.log(res);
    //   },
    //   fail: (err) => {
    //     console.error(err);
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})

function md(obj) {
  let temp;//加密前拼接字符串
  //字典排序
  var kobj = Object.keys(obj).sort();
  for (let k in kobj) {
    temp += '&' + kobj[k] + "=" + obj[kobj[k]];
  }
  return md5.hex_md5(temp.substring(1));
}