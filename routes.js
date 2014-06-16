var home = require('./handlers/home');

module.exports = function (app) {
	app.get('/', home.index);
	app.get('/logo', home.logo);
	app.get('/download-logo', home.download_logo);
};