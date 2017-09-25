var BaseDao = require('./baseDao');
var userDao = Object.create(BaseDao('j_users'));
module.exports = userDao;
/*
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
        username: req.body.username,
        password: req.body.password
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
  remove: function (req, res, next) {
    app.sync().then(function () {
      const id = req.params.id;
      User.destroy({'where': {'id': id}})
        .then((result) => {
          res.send(Response.success(result))
        }).catch((err) => {
        res.send(Response.error(err))
      })
    })
  },
  find: function (req, res, next) {
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
};*/
