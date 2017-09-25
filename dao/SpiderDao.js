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
  },
  findAll: function (req, res, next) {
    const pageIndex = req.body.pageIndex;
    const pageSize = req.body.pageSize;
    app.sync().then(function () {
      Spider.findAll({offset: (pageIndex - 1) * pageSize, limit: pageSize}).then(function (result) {
        Spider.count().then(function (total) {
          res.send({
            code: 1,
            data: {
              content: result,
              total: total
            }
          })
        })
      }).catch(function (err) {
        console.log('failed: ' + err);
      });
    })
  }
}