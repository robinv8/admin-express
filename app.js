var express = require('express')
  , path = require('path')
  , bodyParser = require('body-parser')
  , index = require('./routes/index')
  , users = require('./routes/users')
  , fs = require('fs')
  , morgan = require('morgan')
  , FileStreamRotator = require('file-stream-rotator')
  , app = express();

/**
 * logger configuration
 */
var logDirectory = path.join(__dirname, 'log')
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);
var accessLogStream = FileStreamRotator.getStream({
  date_format: 'YYYYMMDD',
  filename: path.join(logDirectory, 'access-%DATE%.log'),
  frequency: 'daily',
  verbose: false
})
//{stream: accessLogStream}
app.use(morgan('combined'));


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

app.post('/json', function (req, res) {
  console.log(req.body);
  res.send(req.body);

});

/**
 * scanning controller
 */
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
})


/**
 * load the routing
 */
app.use('/', index);
app.use('/users', users);

module.exports = app;