var multiparty = require('multiparty');
var SpeechClient = require('../util/aipspeechclient');
var fs = require('fs');
module.exports = (app) => {
  app.post('/upload', (req, res) => {
    //生成multiparty对象，并配置上传目标路径
    var form = new multiparty.Form({uploadDir: './temp/'});
    form.parse(req, function (err, fields, files) {
      var filesTmp = JSON.stringify(files, null, 2);

      if (err) {
        console.log('parse error: ' + err);
      } else {
        console.log('parse files: ' + filesTmp);
        var inputFile = files.inputFile[0];
        var uploadedPath = inputFile.path;
        var dstPath = './temp/' + inputFile.originalFilename+'.wav';
        //重命名为真实文件名
        fs.rename(uploadedPath, dstPath, function (err) {
          if (err) {
            console.log('rename error: ' + err);
          } else {
            SpeechClient(dstPath)
            console.log('rename ok');
          }
        });
      }

      res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
      res.write('received upload:\n\n');
      res.end('sasa');
    });
    //SpeechClient(source)
  })
}