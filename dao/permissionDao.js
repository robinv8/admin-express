const BaseDao = require('./baseDao');
const permissionDao = Object.create(BaseDao('jshop_permission'));
module.exports = permissionDao;