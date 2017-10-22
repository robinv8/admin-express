const BaseDao = require('./baseDao');
const cnodeDao = Object.create(BaseDao('jcnode_topics'));

module.exports = cnodeDao;
