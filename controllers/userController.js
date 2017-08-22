'use strict';
var userDao = require('../dao/userDao');
module.exports = (app) => {
  app.post('/addUser', (req, res, next) => {
    console.log(req.body)
    userDao.create(req, res, next)
  });
  app.post('/updateUser', (req, res, next) => {
    userDao.update(req, res, next)
  })
}