var http = require('http')
	, express = require('express')
	, app = express();

app.set('view engine', 'jade');
app.set('views', './views');

app.use(express.static('./public'));
app.set(express.responseTime());
app.set(app.router);
app.set(express.errorHandler());

app.get('/', function (req, res) {
	//res.render('index');
	fail();
});

app.get('/say-hello', function (req, res) {
	res.render('hello');
});

app.get('/test', function (req, res) {
	res.send('<h1>This is a test</h1>');
});

http.createServer(app).listen(3000, function () {
	console.log('Express app started.');
});