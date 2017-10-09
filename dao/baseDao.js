const app = require('../config/applicationMysql');
const baseModel = require('../models/j_base');
const Response = require('../responses/responsejson')

module.exports = (modelName) => {
    var Model = baseModel(modelName);

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
            Model.findAll(options)
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
            Model.findById(id)
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
                Model.update(params, {
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
                Model.create(params).then(function (result) {
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
            Model.findAndCount({offset: (pageIndex - 1) * pageSize, limit: pageSize * 1}).then(function (result) {
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
            Model.count().then(function (total) {
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
                Model.destroy({'where': idObj})
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
        Model,
        create,
        findAndCount,
        update,
        remove,
        findById,
        findAll
    }
}

