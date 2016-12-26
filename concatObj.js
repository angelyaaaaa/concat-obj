module.exports = function() {
	var output = {};
	var len = arguments.length;
	for (var i = 0; i < len; i++) {
		for (let key in arguments[i]) {
			if (arguments[i].hasOwnProperty(key)) {
				output[key] = arguments[i][key];
			}
		}
	}
	return output;
};
