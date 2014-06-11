var http = require('http')
	, express = require('express')
	, app = express();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.logger('dev'));

app.get('/', function (req, res) {
	res.render('index', {title: config.title, message: config.message});
});

app.get('/say-hello', function (req, res) {
	res.render('hello');
});

app.get('/test', function (req, res) {
	res.send('<h1>This is a test</h1>');
});

http.createServer(app).listen(config.port, function () {
	console.log('Express app started on port ' + config.port);
});