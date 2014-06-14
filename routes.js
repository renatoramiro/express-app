var routes = require('./handlers/home');

module.exports = function (app) {
	app.get('/', routes.index);
};