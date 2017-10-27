const assert = require("chai").assert; // assertion bibliotek
const authCtrl = require("../src/controllers/authCtrl");

describe("Auth", () => {
	it("Test token generation", () => {
		var test = authCtrl.test();
		assert.equal(test, "hello");
	});
});
