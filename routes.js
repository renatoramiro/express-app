var home = require('./handlers/home');

module.exports = function (app) {
	app.get('/', home.index);
	app.get('/logo', home.logo);
	app.get('/download-logo', home.download_logo);
	app.get('/url1', home.url1);
	app.get('/url2', home.url2);
};