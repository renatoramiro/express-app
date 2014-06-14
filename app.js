var http = require('http')
	, express = require('express');

var namespace = require('express-namespace');
var resource = require('express-resource');
var app = express();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.logger('dev'));
app.use(express.responseTime());
app.use(app.router);

app.resource('users', require('./resources/users.js'));

var routes = require('./routes')(app);

app.namespace('/articles', function () {
	app.get('/', function (req, res) {
		res.send('Index of articles');
	});

	app.get('/new', function (req, res) {
		res.send('New article');
	});

	app.get('/edit/:id', function (req, res) {
		res.send('Edit article ' + req.params.id);
	});

	app.get('/delete/:id', function (req, res) {
		res.send('Delete article ' + req.params.id);
	});

	app.get('/2013', function (req, res) {
		res.send('Article from 2013');
	});

	app.namespace('/2013/jan', function () {
		app.get('/', function (req, res) {
			res.send('Articles from Jan 2013');
		});

		app.get('/nodejs', function(req, res) {
			res.send('Articles about Node from jan 2013');
		});
	});
});

http.createServer(app).listen(config.port, function () {
	console.log('Express app started on port ' + config.port);
});