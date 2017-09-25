var app = require('../config/applicationMysql');
var baseModel = require('../models/j_base');
var Response = require('../responses/responsejson')

module.exports = (modelName) => {
  var Modal = baseModel(modelName);
  return {
    /**
     * @description create a record
     * @param params
     * @returns {Promise}
     */
    create: function (params) {
      var promise = new Promise((resolve, reject) => {
        app.sync().then(function () {
          Modal.create(params).then(function (result) {
            resolve(Response.success(result))
          }).catch(function (err) {
            reject(Response.error(err));
          });
        })
      });
      return promise;
    },
    /**
     * @description pagination
     * @param pageIndex
     * @param pageSize
     * @returns {Promise}
     */
    list: function (pageIndex, pageSize) {
      var promise = new Promise((resolve, reject) => {
        app.sync().then(function () {
          Modal.findAll({offset: (pageIndex - 1) * pageSize, limit: pageSize}).then(function (result) {
            Modal.count().then(function (total) {
              resolve(Response.success({
                content: result,
                total: total
              }))
            })
          }).catch(function (err) {
            reject(Response.error(err));
          });
        })
      });
      return promise;
    },
    update: function (id, params) {
      var promise = new Promise((resolve, reject) => {
        app.sync().then(function () {
          Modal.update(params, {
            where: {
              id: id
            }
          }).then(function (result) {
            resolve(Response.success(result))
          }).catch(function (err) {
            reject(Response.error(err))
          });
        })
      });
      return promise;
    },
    /**
     * @description delete a record
     * @param id
     * @returns {Promise}
     */
    delete: function (id) {
      var promise = new Promise((resolve, reject) => {
        app.sync().then(function () {
          Modal.destroy({'where': {'id': id}})
            .then((result) => {
              resolve(Response.success(result))
            }).catch((err) => {
            reject(Response.error(err))
          })
        })
      });
      return promise;
    }
  }
}

