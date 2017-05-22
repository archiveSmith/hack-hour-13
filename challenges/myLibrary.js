module.exports = {
	
	testCase: function (actual, expected) {

		function test (actual, expected) {
			var result;
			if (typeof actual !== typeof expected) {
				result = false;
			} else if (typeof actual !== 'object') {
				result = actual === expected;
			} else if (Array.isArray(actual)) {
				result = (actual.length === expected.length)
						 &&
						 actual.every( (elem, i) => test(elem, expected[i]) );
			}
			return result;
		}

		var overallResult = test(actual, expected);
		console.log (`${actual} vs. ${expected}: ${overallResult}`);
		return overallResult;
	}

}