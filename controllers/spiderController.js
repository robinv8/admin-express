'use strict';
var SpiderDao = require('../dao/SpiderDao')
module.exports = (app) => {
  app.post('/spider/findAll', (req, res, next) => {
    SpiderDao.findAll(req, res, next)
  })
}