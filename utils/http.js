const md5 = require('./md5');

function md(obj) {
  let temp = '';//加密前拼接字符串
  //字典排序
  var kobj = Object.keys(obj).sort();
  for (let k in kobj) {
    temp += kobj[k] + "=" + obj[kobj[k]] + '&';
  }
  temp += "access_token=" + "123456";
  // console.log("temp is " + temp);
  // console.log(md5.hex_md5(temp))
  return md5.hex_md5(temp);
}

const postService = (option,data, callback) => {
  console.log(data);
  const date = new Date().getTime()
  const AppKey = 'menya.mall'
  const client_id = 'wx.mall'
  //以GET方法为例
  let queryString = {
    api_method: option.api_method,
    timestamp: date,
  };
  let certifyString = {
    AppKey: AppKey,
    account: option.account,
    timestamp: date,
    client_id: client_id,
  };
  const query = md(queryString).substring(2, 12);
  const _certify = md(certifyString);
  const signature = md5.hex_md5(_certify.substring(0, 9) + query + _certify.substring(19, 32));
  wx.request({
    url: option.url,
    data: data,
    method:"POST",
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
      'AppKey': AppKey,
      'Rest-Auth': 'account=' + option.account + ',client_id=' + client_id + ',timestamp=' + date + ',signature=' + signature
    },
    success: (res) => {
      // console.log(res);
      callback(res.data)
    },
    fail: (err) => {
      console.error(err)
    }
  })
}

const getService = (option, callback) => {
  const date = new Date().getTime()
  const AppKey = 'menya.mall'
  const client_id = 'wx.mall'
  //以GET方法为例
  let queryString = {
    api_method: option.api_method,
    timestamp: date,
  };
  let certifyString = {
    AppKey: AppKey,
    account: option.account,
    timestamp: date,
    client_id: client_id,
  };
  const query = md(queryString).substring(2, 12);
  const _certify = md(certifyString);
  const signature = md5.hex_md5(_certify.substring(0, 9) + query + _certify.substring(19, 32));
  wx.request({
    url: option.url,
    header: {
      'Accept': 'application/json',
      'AppKey': AppKey,
      'Rest-Auth': 'account=' + option.account + ',client_id=' + client_id + ',timestamp=' + date + ',signature=' + signature
    },
    success: (res) => {
      // console.log(res);
      callback(res.data)
    },
    fail: (err) => {
      console.error(err)
    }
  })
}

const uploadFile = (url, file, data) => {
  wx.uploadFile({
    url: url,
    filePath: file,
    name: 'file',
    formData: data,
    success: function (res) {
      console.log(res.data)
    },
    fail: function (err) {
      console.log(err)
    }
  })
}
const downloadFile = (url, typ, success) => {
  wx.downloadFile({
    url: url,
    type: typ,
    success: function (res) {
      if (success) {
        success(res.tempFilePath)
      }
    },
    fail: function (err) {
      console.log(err)
    }
  })
}

const saveFile = (tempFile, success) => {
  wx.saveFile({
    tempFilePath: tempFile,
    success: function (res) {
      const svaedFile = res.savedFilePath
      if (success) {
        success(svaeFile)
      }
    }
  })

}

module.exports = {
  postService: postService,
  getService: getService,
  uploadFile: uploadFile,
  downloadFile: downloadFile,
  saveFile: saveFile
}