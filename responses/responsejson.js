module.exports = {
  success: function (data) {
    return {
      code: 1,
      data: data,
      msg: '操作成功！'
    }
  },
  error: function (err) {
    return {
      code: 0,
      data: err,
      msg: '操作失败！'
    }
  }
}