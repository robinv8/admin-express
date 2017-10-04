const app = require('../config/applicationMysql');
const baseModel = require('../models/j_base');
const Response = require('../responses/responsejson')

module.exports = (modelName) => {
    var Modal = baseModel(modelName);

    /**
     * query all records
     * @param whereObj
     */
    function findAll(params) {
        const options = {};
        const {where} = params || {};
        if (where) {
            options.where = where;
        }
        var promise = new Promise((resolve, reject) => {
            Modal.findAll(options)
                .then((result) => {
                    resolve(Response.success(result))
                }).catch((err) => {
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
        const promise = new Promise((resolve, reject) => {
            Modal.findById(id)
                .then((result) => {
                    resolve(Response.success(result))
                }).catch((err) => {
                reject(Response.error(err))
            })
        })
        return promise;
    }

    function update(idObj, params) {
        const promise = new Promise((resolve, reject) => {
            app.sync().then(function () {
                Modal.update(params, {
                    where: idObj
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
        const promise = new Promise((resolve, reject) => {
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
        const promise = new Promise((resolve, reject) => {
            Modal.findAndCount({offset: (pageIndex - 1) * pageSize, limit: pageSize * 1}).then(function (result) {
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
        const promise = new Promise((resolve, reject) => {
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

    function remove(idObj) {
        const promise = new Promise((resolve, reject) => {
            app.sync().then(function () {
                Modal.destroy({'where': idObj})
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
        Modal,
        create,
        findAndCount,
        update,
        remove,
        findById,
        findAll
    }
}

