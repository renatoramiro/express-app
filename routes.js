var home = require('./handlers/home');

module.exports = function (app) {
	app.get('/', home.index);
	app.get('/logo', home.logo);
	app.get('/download-logo', home.download_logo);
	app.get('/url1', home.url1);
	app.get('/url2', home.url2);
	app.get('/search', home.search);
	app.get('/search-result', home.search_result);

	app.get('/signup', home.signup);
	app.post('/signup', home.signup_post);
	app.get('/entrou', home.entrou);
	app.get('/logout', home.logout);

	app.get('/edit', home.edit);
	app.post('/update_profile', home.update_profile);
};