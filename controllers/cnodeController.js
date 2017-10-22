const cnode = require('../dao/cnodeDao');
const {topicSync} = require('../spider/cnode.sync');

module.exports = (app) => {
  const apiPath = '/jarvis/' + app.version + '/cnode';
  app.get(apiPath, (req, res, next) => {
    const pageIndex = req.query.pageIndex;
    const pageSize = req.query.pageSize;
    cnode.findAndCount(pageIndex, pageSize)
      .then((result) => {
        res.send(result)
      }, (err) => {
        res.send(err);
      })
  });
  app.post(apiPath + '/dataSync', (req, res, next) => {
    topicSync(1)
  })
}