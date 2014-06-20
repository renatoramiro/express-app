exports.index = function (req, res) {
	res.set('X-Test', 'OK');
	res.render('index', {title: 'Teste', cars: ["Saab", "Volvo", "BMW"]});
};

exports.logo = function (req, res) {
	res.sendfile('./public/images/logo.png', function (err) {
		if (err) {console.log(err);}
		else { console.log('File sent');}
	});
};

exports.download_logo = function (req, res) {
	res.download('./public/images/logo.png', 'packt_logo.png', function (err) {
		if (err) {console.log(err);}
		else { console.log('File downloaded');}
	});
};

exports.url1 = function (req, res) {
	res.redirect('/url2');
};

exports.url2 = function (req, res) {
	res.render('url2',
			{ title: 'Url 2',
				message: 'Redirecionado da Url 1 para a Url 2.'
			}
	);
};

exports.search = function (req, res) {
	res.render('search');
};

exports.search_result = function (req, res) {
	var skills = req.query.skills
	console.log('Skills: ');
	for (var i = 0; i < skills.length; i++) {
		console.log((i+1) +'. '+ skills[i]);
	};
	res.json(req.query.skills);
};

exports.signup = function (req, res) {
	res.render('signup');
};

exports.signup_post = function (req, res) {
	req.session.name = req.body.name;
	req.session.email = req.body.email;
	console.log(req.body);
	res.redirect('/entrou');
};

exports.entrou = function (req, res) {
	var name = req.session.name;
	var email = req.session.email;
	res.render('entrou', {name: name, email: email});
};

exports.logout = function (req, res) {
	req.session.name = null;
	req.session.email = null;
	res.redirect('/signup');
};

exports.edit = function (req, res) {
	res.render('edit', {name: req.session.name, email: req.session.email});
};

exports.update_profile = function (req, res) {
	var name = req.body.name;
	var email = req.body.email;

	if (name) {
		req.session.name = name;
	}

	if (email) {
		req.session.email = email;
	}

	res.redirect('/entrou');
}
