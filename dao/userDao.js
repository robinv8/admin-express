var app = require('../config/applicationMysql');
var userModel = require('../models/j_base');
var Response = require('../responses/responsejson')
var User = userModel('j_user');

module.exports = {
  create: function (req, res, next) {
    app.sync().then(function () {
      User.create({
        username: req.body.username,
        password: req.body.password
      }).then(function (result) {
        res.send(Response.success(result))
      }).catch(function (err) {
        res.send(Response.error(err))
      });
    })
  },
  update: function (req, res, next) {
    app.sync().then(function () {
      User.update({
        username: 'admin'
      }, {
        where: {
          id: 'ae283c70-8752-11e7-a143-8fd8b4caf80a'
        }
      }).then(function (result) {
        res.send(JSON.stringify(result))
      }).catch(function (err) {
        console.log('failed: ' + err);
      });
    })
  },
  findAll: function (req, res, next) {
    const pageIndex = req.body.pageIndex;
    const pageSize = req.body.pageSize;
    app.sync().then(function () {
      User.findAll({offset: (pageIndex - 1) * pageSize, limit: pageSize}).then(function (result) {
        User.count().then(function (total) {
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
};