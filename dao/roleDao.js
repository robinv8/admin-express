const BaseDao = require('./baseDao');
const roleDao = Object.create(BaseDao('jshop_role'));
module.exports = roleDao;