var http = require('http');
var cheerio = require('cheerio');


function download(url, callback) {
  http.get(url, res => {
    var data = '';
    res.on('data', chunk => {
      data += chunk;
    });
    res.on("end", function () {
      callback(data);
    }).on('error', () => {
      callback(null);
    });
  })
}

var url = 'http://open.163.com/special/opencourse/englishs1.html';
download(url, data => {
  if (data) {
    var $ = cheerio.load(data,{decodeEntities: false});
    $(".m-clist#list1 tbody").children().each(function (i, e) {
    });
  }
})