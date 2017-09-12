var app = require('../config/applicationMysql');
var spiderModel = require('../models/j_base');
var Spider = spiderModel('j_spider');

module.exports = {
  create: function (url, urltext, parenturl,callback) {
    app.sync().then(function () {
      Spider.create({
        url: url,
        urltext: urltext,
        parenturl: parenturl
      }).then(function (result) {
        callback(result)
      })
    })
  }
}