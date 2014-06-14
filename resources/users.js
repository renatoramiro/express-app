exports.index = function (req, res) {
	res.send('index of users');
};

exports.new = function (req, res) {
	res.send('form for new user');
};

exports.create = function(req, res) {
	res.send('handle form for new user');
};

exports.show = function(req, res) {
	res.send('show user ' + req.params.user);
};

exports.edit = function(req, res) {
	res.send('form to edit user ' + req.params.user);
};

exports.update = function(req, res) {
	res.send('handle form to edit user ' + req.params.user);
};

exports.destroy = function(req, res) {
	res.send('delete user ' + req.params.user);
};