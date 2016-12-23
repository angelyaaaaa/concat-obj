module.exports = function() {
    var outpu = {};
	    var len = arguments.length;
	    for (var i = 0; i < len; i++) {
	        for (key in arguments[i]) {
	            if (arguments[i].hasOwnProperty(key)) {
	                output[key] = arguments[i][key];
	            }
	        }
	    }
	    return output;
	}	
}
