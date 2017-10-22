var express = require('express')
  , path = require('path')
  , bodyParser = require('body-parser')
  , index = require('./routes/index')
  , fs = require('fs')
  , morgan = require('morgan')
 // , spider = require('./spider/spider')
  , FileStreamRotator = require('file-stream-rotator')
  //,speech=require('./util/aipspeechclient')
  // , log = require('./util/logHelper')
  //, cnode = require('./spider/cnode.sync')
  , app = express();

//{stream: accessLogStream}
app.use(morgan('combined'));
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1')
  if (req.method == "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});

app.set('port', process.env.PORT || 3000)
/**
 * specify template engine
 */
app.set('views', path.join(__dirname, 'views'));
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');

/**
 * specify static resources
 */
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'static')));

/**
 * analysis of form parameters
 */
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

/**
 * scanning controller
 */
app.version = 'v1'
var controllerPath = __dirname + '/controllers';
var self = __filename.substring(__dirname.length + 1);
var files = fs.readdirSync(controllerPath);

files.forEach((filename) => {
  if (filename === self) {
    return
  }
  var pos = filename.lastIndexOf('.');
  if (pos === -1) {
    return
  }

  var filePrefix = filename.substring(0, pos);
  var filePostfile = filename.substring(pos + 1);
  if (filePrefix.length < 1 || filePostfile.length < 1 || filePostfile !== 'js') {
    return
  }
  require(controllerPath + '/' + filePrefix)(app);
});

/**
 * load the routing
 */
app.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
});

module.exports = app;