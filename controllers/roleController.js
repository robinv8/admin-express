const role = require('../dao/roleDao');
module.exports = (app) => {
  const apiPath = '/jarvis/' + app.version + '/roles';

  app.get(apiPath, (req, res, next) => {
    const pageIndex = req.query.pageIndex;
    const pageSize = req.query.pageSize;
    role.findAndCount(pageIndex, pageSize)
      .then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      })
  });
  app.get(apiPath + '/all', (req, res, next) => {
    role.findAll()
      .then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      });
      next();
  });
  app.get(apiPath + '/:id', (req, res, next) => {
    role.findById(req.params.id)
      .then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      })
  });
  app.post(apiPath, (req, res, next) => {
    role.create({
      roleName: req.body.roleName || req.query.roleName
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  });
  app.delete(apiPath + '/:id', (req, res, next) => {
    role.remove({
      roleId: req.params.id
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  });
  app.put(apiPath + '/:id', (req, res, next) => {
    role.update({
      roleId: req.params.id
    }, {
      roleName: req.body.roleName || req.query.roleName
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  })
}