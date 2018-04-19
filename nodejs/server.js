var express = require('express'),
  app = express(),
  port = process.env.PORT || 8080,
  bodyParser = require('body-parser');
var request = require('request');

app.use(bodyParser.text({ type: '*/*' }));

var routes = require("./routes.js");
routes(app);

app.use(function(req, res) {
	//modify the url in any way you want
	var url = "http://127.0.0.1" + req.url;
	Object.getOwnPropertyNames(req.headers).forEach(
		function (name, idx, array) {
    	req.headers[name] = req.headers[name].replace(":"+ port,"");
    });

	var params = {
		uri: url,
		method: req.method,
		headers: req.headers
	};
	
	
	if (req.method !== "GET" && req.body !== "") {
		params.form = req.body;
	}

	var r = request(params);

	r.pipe(res);
});

app.listen(port);

console.log('Express proxy server started on: ' + port);