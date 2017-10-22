var cheerio = require('cheerio');
var httpHelper = require('../util/httpHelper')
var SpiderDao = require('../dao/SpiderDao');
var superagent = require('superagent');

function download(url, callback) {
  var options = require('url').parse(url);
  superagent.get(options)
    .end(function (err, res) {
      if(res&&res.text){
        callback(res.text);
      }else{
        console.error(url,(err&&err.message)||'请求异常！');
      }
    });

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

          console.log(url)
          SpiderDao.create(_url, urlText, parentUrl, result => {
            //spider(_url);
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


spider('https://www.jd.com/')


function traverse(_self, $) {
  _self.children().each(function () {
    if ($(this).get(0).name === 'a') {
      console.log($(this))
    }
    if ($(this).children().length > 0) {
      /*var _$ = cheerio.load($(this).html(), {decodeEntities: false});*/
      //traverse($(this), $);
    } else {
      return
    }
  })
}
