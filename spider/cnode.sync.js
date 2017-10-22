const superagent = require('superagent');
const cnode = require('../dao/cnodeDao');
const logger = require('../util/logHelper');

function topicSync(page) {
  let limit = 1000;
  try {
    superagent.get(`https://cnodejs.org/api/v1/topics?limit=${limit}&page=${page}&mdrender=false`)
      .end((err, res) => {
        if (err) return;
        const result = JSON.parse(res.text);
        if (result.success) {
          for (let i = 0; i < result.data.length; i++) {
            let data = result.data[i];
            cnode.findById(data.id)
              .then((findData) => {
                if (!findData.data) {
                  cnode.create({
                    id: data.id,
                    title: data.title,
                    content: data.content,
                    authorId: data.author_id,
                    createAt: data.create_at,
                    lastReplyAt: data.last_reply_at,
                    replyCount: data.reply_count,
                    tab: data.tab,
                    top: data.top ? 1 : 0,
                    visitCount: data.visit_count
                  }).then((r) => {
                    if (result.data.length < limit) return;
                    if (i === limit - 1) {
                      logger.info('save succeed:' + data.id);
                      page++;
                      topicSync(page)
                    }
                  }, (err) => {
                    logger.error(JSON.stringify(err));
                  })
                } else {
                  if (i === limit - 1) {
                    logger.warn('skip:' + JSON.stringify(page));
                    page++;
                    topicSync(page)
                  }
                }
              })
          }
        }
      })
  } catch (err) {
    logger.error(JSON.stringify(err));

  }
}

module.exports = {
  topicSync
};