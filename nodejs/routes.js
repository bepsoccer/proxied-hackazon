'use strict';

module.exports = function(app) {
	var controller = require('./controller.js');

	app.route('/submit')
		.post(controller.submit);
};