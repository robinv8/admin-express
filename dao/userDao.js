var app = require('../config/applicationMysql');
var userModel = require('../models/j_user');
var createdResponse = require('../responses/created')
var User = userModel(app, app.Sequelize);

module.exports = {
  create: function (req, res, next) {
    app.sync().then(function () {
      User.create({
        username: 'sasasa'
      }).then(function (result) {
        res.send(JSON.stringify(result))
      }).catch(function (err) {
        console.log('failed: ' + err);
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
  }
};