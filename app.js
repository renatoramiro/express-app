var http = require('http')
	, express = require('express')
	, app = express();

var iniparser = require('iniparser');
var config = iniparser.parseSync('./config.ini');

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.use(express.logger('dev'));
app.use(express.responseTime());
app.use(app.router);

var routes = require('./routes')(app);

http.createServer(app).listen(config.port, function () {
	console.log('Express app started on port ' + config.port);
});