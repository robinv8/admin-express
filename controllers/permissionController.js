const permission = require('../dao/permissionDao');
module.exports = (app) => {
    const apiPath = '/jarvis/' + app.version + '/permissions';
    app.get(apiPath, (req, res, next) => {
        const pageIndex = req.query.pageIndex;
        const pageSize = req.query.pageSize;
        permission.findAndCount(pageIndex, pageSize)
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err);
            })
    });
    app.get(apiPath + '/all', (req, res, next) => {
        permission.findAll()
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err);
            });
        next();
    });
    app.get(apiPath + '/:id', (req, res, next) => {
        permission.findById(req.params.id)
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err);
            })
    });
    app.post(apiPath, (req, res, next) => {
        permission.create({
            permissionName: req.body.permissionName || req.query.permissionName,
            permissionType: req.body.permissionType || req.query.permissionType,
            permissionParentId: req.body.permissionParentId || req.query.permissionParentId
        }).then((result) => {
            res.send(result);
        }, (err) => {
            res.send(err);
        })
    });
    app.delete(apiPath + '/:id', (req, res, next) => {
        permission.remove({
            permissionId: req.params.id
        }).then((result) => {
            res.send(result);
        }, (err) => {
            res.send(err);
        })
    });
    app.put(apiPath + '/:id', (req, res, next) => {
        role.update({
            permissionId: req.params.id
        }, {
            permissionName: req.body.permissionName || req.query.permissionName,
            permissionType: req.body.permissionType || req.query.permissionType,
            permissionParentId: req.body.permissionParentId || req.query.permissionParentId
        }).then((result) => {
            res.send(result);
        }, (err) => {
            res.send(err);
        })
    })
    app.get(apiPath + '/queryByParentId/:parentId', (req, res, next) => {
        permission.findAll({
            where: {
                permissionParentId: req.params.parentId
            }
        }).then((result) => {
            res.send(result);
        }, (err) => {
            res.send(err);
        })
    })
}