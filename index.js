"use strict";

module.exports = assertRejected;

function assertRejected(promise, message) {
	return promise.then(function() {
		throw new Error("Assertion Error: Promise wasn't rejected");
	}, function(e) {
		if (message === undefined)
			return;
		if (e.message !== message)
			throw new Error(wrongMessage(message, e.message))
	});
}

function wrongMessage(expected, actual) {
	return "Assertion Error: Promise was rejected with \"" +
		actual +
		"\" instead of \"" +
		expected +
		"\"";
}
