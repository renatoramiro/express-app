exports.index = function (req, res) {
	error();
	res.set('X-Test', 'OK');
	res.render('index');
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