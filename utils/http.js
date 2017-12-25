const getService = (url,callback) => {
  wx.request({
    url: url,
    header: {
      'content-type': 'application/json' // 默认值
    },
    success: (res) => {
      callback(res.data);
    },
    fail: (err) => {
      console.error(err);
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
  getService: getService,
  uploadFile: uploadFile,
  downloadFile: downloadFile,
  saveFile: saveFile
}