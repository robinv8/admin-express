var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index', {title: 'express',message:'sasasasa'})
});

module.exports = router;