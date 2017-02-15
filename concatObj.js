module.exports = function() {
	let output = {};
	let len = arguments.length;
	for (let i = 0; i < len; i++) {
		let val = arguments[i];
		for (let key in val) {
			if (val.hasOwnProperty(key)) {
				output[key] = val[key];
			}
		}
	}
	return output;
};
