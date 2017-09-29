var BaseDao = require('./baseDao');
var roleDao = Object.create(BaseDao('jshop_role'));
module.exports = roleDao;