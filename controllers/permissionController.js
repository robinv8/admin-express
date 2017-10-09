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
    app.get(apiPath + '/menu', (req, res, next) => {
        permission.menu()
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err)
            })
    })
    app.get(apiPath + '/:id', (req, res, next) => {
        permission.findById(req.params.id)
            .then((result) => {
                res.send(result)
            }, (err) => {
                res.send(err);
            })
    });
    app.post(apiPath, (req, res, next) => {
        const permissionParentIds = req.body.permissionParentIds || req.query.permissionParentIds;
        permission.create({
            permissionName: req.body.permissionName || req.query.permissionName,
            permissionType: req.body.permissionType || req.query.permissionType,
            permissionUrl: req.body.permissionUrl || req.query.permissionUrl,
            permissionSort: req.body.permissionSort || req.query.permissionSort,
            permissionParentIds: permissionParentIds,
            permissionParentId: permissionParentIds.split(',').pop()
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
        const permissionParentIds = req.body.permissionParentIds || req.query.permissionParentIds;
        permission.update({
            permissionId: req.params.id
        }, {
            permissionName: req.body.permissionName || req.query.permissionName,
            permissionType: req.body.permissionType || req.query.permissionType,
            permissionUrl: req.body.permissionUrl || req.query.permissionUrl,
            permissionSort: req.body.permissionSort || req.query.permissionSort,
            permissionParentIds: permissionParentIds,
            permissionParentId: permissionParentIds.split(',').pop()
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