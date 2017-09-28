var app = require('../config/applicationMysql');
var baseModel = require('../models/j_base');
var Response = require('../responses/responsejson')

module.exports = (modelName) => {
    var Modal = baseModel(modelName);

    /**
     * query all records
     */
    function findAll() {
        var promise = new Promise((resolve, reject) => {
            Modal.findAll()
                .then((result) => {
                    resolve(Response.success(result))
                }).catch(() => {
                reject(Response.error(err))
            })
        })
        return promise;
    }

    /**
     *
     * @param id
     */
    function findById(id) {
        var promise = new Promise((resolve, reject) => {
            Modal.findById(id)
                .then((result) => {
                    resolve(Response.success(result))
                }).catch(() => {
                reject(Response.error(err))
            })
        })
        return promise;
    }

    function update(id, params) {
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
    }

    /**
     * @description create a record
     * @param params
     * @returns {Promise}
     */
    function create(params) {
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
    }

    /**
     * @description pagination
     * @param pageIndex
     * @param pageSize
     * @returns {Promise}
     */
    function findAndCount(pageIndex, pageSize) {
        var promise = new Promise((resolve, reject) => {
            Modal.findAndCount({offset: (pageIndex - 1) * pageSize, limit: pageSize}).then(function (result) {
                resolve(Response.success({
                    content: result.rows,
                    total: result.count
                }))
            }).catch(function (err) {
                reject(Response.error(err));
            });
        });
        return promise;
    }

    /**
     * query records total number
     * @returns {Promise}
     */
    function count() {
        var promise = new Promise((resolve, reject) => {
            Modal.count().then(function (total) {
                resolve(total);
            }).catch((err) => {
                reject(err);
            })
        })
        return promise;
    }


    /**
     * @description delete a record
     * @param id
     * @returns {Promise}
     */

    function remove(id) {
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

    return {
        create,
        findAndCount,
        update,
        remove
    }
}

