var assertRejected = require("./");
var test = require("blue-tape");

test("rejected promises should pass", function(t) {
	return assertRejected(Promise.reject(new Error("Test")));
});

test("message comparisons are made if specified", function(t) {
	return assertRejected(Promise.reject(new Error("Test")), "Test");
});

test("resolved promises fail", function(t) {
	return assertRejected(
		assertRejected(Promise.resolve("Test"))
	);
});
