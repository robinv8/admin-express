const BaseDao = require('./baseDao');
const adminDao = Object.create(BaseDao('jshop_admin'));
module.exports = adminDao;