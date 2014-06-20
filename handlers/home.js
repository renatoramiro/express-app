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