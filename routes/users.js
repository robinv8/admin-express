var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');


router.get('/addUser', function (req, res, next) {
  userDao.create(req, res, next)
});
router.get('/updateUser', function (req, res, next) {
  userDao.update(req, res, next)
})

module.exports = router;
