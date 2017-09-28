var BaseDao = require('./baseDao');
var adminDao = Object.create(BaseDao('jshop_admin'));
module.exports = adminDao;