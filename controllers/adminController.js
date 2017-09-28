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
      adminName: req.body.username || req.query.adminName,
      adminPassword: req.body.password || req.query.adminPassword
    }).then((result) => {
      res.send(result);
    }, (err) => {
      res.send(err);
    })
  })
  app.delete(apiPath + '/:id', (req, res, next) => {
    admin.remove({
      adminId: req.params.id
    })
      .then((result) => {
        res.send(result);
      }, (err) => {
        res.send(err);
      })
  })
}