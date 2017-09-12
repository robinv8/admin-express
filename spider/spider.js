var cheerio = require('cheerio');
var httpHelper=require('../util/httpHelper')
var SpiderDao = require('../dao/SpiderDao');

function download(url, callback) {
  httpHelper.get(url, 1000, function (err, data) {
    if (err) {
      return err;
    }
    callback(data);
  }, 'gbk', {'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2490.86 Safari/537.36'});

}

function spider(url) {
  download(url, data => {
    if (data) {
      var $ = cheerio.load(data, {decodeEntities: false});
      $('body').find('a').each(function (i, e) {
        var _url = $(e).attr('href');
        if (!_url) {
          return;
        }
        if (_url.toString().indexOf("https") < 0 && _url.toString().indexOf("http") < 0) {
          _url = 'http:' + _url;
        }
        var isUrl = CheckUrl(_url);
        if (isUrl) {
          var urlText = $(e).text().trim();
          var parentUrl = url;
          SpiderDao.create(_url, urlText, parentUrl, result => {
            spider(_url);
          });
        }

      })
      //traverse($('body'), $)
    }
  })
}

/**
 * verify the url
 * @param str
 * @returns {boolean}
 * @constructor
 */
function CheckUrl(str) {
  var RegUrl = new RegExp();
  RegUrl.compile("^[A-Za-z]+://[A-Za-z0-9-_]+\\.[A-Za-z0-9-_%&\?\/.=]+$");//jihua.cnblogs.com
  if (!RegUrl.test(str)) {
    return false;
  }
  return true;
}

spider('https://cnodejs.org/')


function traverse(_self, $) {
  _self.children().each(function () {
    if ($(this).get(0).name === 'a') {
      console.log($(this))
    }
    if ($(this).children().length > 0) {
      /*var _$ = cheerio.load($(this).html(), {decodeEntities: false});*/
      traverse($(this), $);
    } else {
      return
    }
  })
}
