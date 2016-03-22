var assertRejected = require("./");
var test = require("blue-tape");

test("rejected promises should pass", function(t) {
	return assertRejected(Promise.reject(new Error("Test")));
});

test("rejected promises should resolve with rejection", function(t) {
	var error = new Error("Test");
	return assertRejected(Promise.reject(error)).then(function (x) {
		if (x !== error) throw new Error("Rejected error not sent to .then(). Received: " + x);
	});
});

test("message comparisons are made if specified", function(t) {
	return assertRejected(Promise.reject(new Error("Test")), "Test");
});

test("resolved promises fail", function(t) {
	return assertRejected(
		assertRejected(Promise.resolve("Test"))
	);
});
