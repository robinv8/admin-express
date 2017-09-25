'use strict';
var userDao = require('../dao/userDao');
module.exports = (app) => {
  var apiPath = '/' + app.version + '/users';
  app.post(apiPath, (req, res, next) => {
    console.log(req.body)
    userDao.create({
      username: req.body.username,
      password: req.body.password
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  });
  app.put(apiPath + '/:id', (req, res, next) => {
    const id = req.params.id;
    const username = req.body.username;
    const password = req.body.password;
    userDao.update(id, {
      username: username,
      password: password
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  });
  app.post(apiPath + '/listUsers', (req, res, next) => {
    const pageIndex = req.body.pageIndex;
    const pageSize = req.body.pageSize;
    userDao.list(pageIndex, pageSize)
      .then((result) => {
        res.send(result);
      }, (err) => {
        res.send(err)
      });
  });
  app.delete(apiPath + '/:id', (req, res, next) => {
    userDao.delete(req.params.id)
      .then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      });
  })
}