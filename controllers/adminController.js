var admin = require('../dao/adminDao');

module.exports = (app) => {
    var apiPath = '/' + app.version + '/admins';
    app.get(apiPath, (req, res, next) => {
        admin.findAndCount(1, 10)
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err);
            })
    })
    app.post(apiPath, (req, res, next) => {
        admin.create({
            adminName: req.query.adminName,
            adminPassword: req.query.adminPassword
        }).then((result) => {

        })
    })
}