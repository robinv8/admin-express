const BaseDao = require('./baseDao');
const userDao = Object.create(BaseDao('j_users'));
module.exports = userDao;
