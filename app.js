//app.js
App({
  onLoad: function () {
    // console.log('App onLoad')
    function md(obj) {
      let temp;//加密前拼接字符串
      //字典排序
      var kobj = Object.keys(obj).sort();
      for (let k in kobj) {
        temp += '&' + kobj[k] + "=" + obj[kobj[k]];
      }
      return md5.hex_md5(temp.substring(1));
    }
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

    wx.request({
      url: 'http://192.168.0.46:8080/user/123456789',
      header: {
        'Accept': 'application/json',
        'AppKey': 'menya.mall',
        'Rest-Auth': 'account=123456789,client_id=wx.mall,timestamp=1498558053507,signature=signature',
      },
      success: (res) => {
        console.log(res);
      },
      fail: (err) => {
        console.error(err);
      }
    })
  },
  onLaunch: function () {
    // console.log('App Launch')
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
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