"use strict";

module.exports = assertRejected;

function assertRejected(promise, message) {
	return promise.then(function() {
		throw new Error("Assertion Error: Promise wasn't rejected");
	}, function(e) {
		if (message === undefined)
			return e;
		if (e.message !== message)
			throw new Error(wrongMessage(message, e.message));
		return e;
	});
}

function wrongMessage(expected, actual) {
	return "Assertion Error: Promise was rejected with \"" +
		actual +
		"\" instead of \"" +
		expected +
		"\"";
}
