var http = require('http')
	, express = require('express')
	, app = express();

http.createServer(app).listen(3000, function () {
	console.log('Express app started.');
});

app.get('/', function (req, res) {
	res.send('<h1>Welcome!</h1>');
});