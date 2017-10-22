const BaseDao = require('./baseDao');
const permissionDao = Object.create(BaseDao('jshop_permission'));
const Model = permissionDao.Model;
const Response = require('../responses/responsejson');
permissionDao.menu = function () {
  var tree = [];
  return new Promise((resolve, reject) => {
    function getNode(parentId, index, flag) {
      const options = {};
      options.where = {
        permissionParentId: parentId
      };
      options.order = ['permission_sort'];
      options.logging = true
      Model.findAll(options)
        .then((result) => {
          if (result.length > 0) {
            if (tree.length === 0) {
              tree = result
            } else {
              tree[index].dataValues.subMenu = result;
            }
            for (let i = 0; i < result.length; i++) {
              if (result[i].permissionParentIds.split(',').length < 2) {
                getNode(result[i].permissionId, i, result.length === i + 1)
              } else {
                if (flag) {
                  resolve(Response.success(tree));
                  return
                }
              }
            }
          }
        }).catch((err) => {
        reject(Response.error(err))
      })
    }

    getNode(1);
  });
}
module.exports = permissionDao;