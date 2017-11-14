const authCtrl = require("../src/controllers/authCtrl");

// Unit + Assertion packages
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");

const should = chai.should();
// const assert = chai.assert();
const expect = chai.expect;

chai.use(chaiHttp);

// tester om der en en success attribut på response :D
describe("Login", () => {
	it("receive token", done => {
		chai
			.request(app)
			.post("/login")
			.send({ email: "test@test.dk", password: "test" })
			.end((err, res) => {
				res.body.should.have.property("success");
				done();
			});
	});
});

// tester om vi får success ved login
describe("Login", () => {
	it("receive token", done => {
		chai
			.request(app)
			.post("/login")
			.send({ email: "test@test.com", password: "test" })
			.end((err, res) => {
				expect(res.body.success).to.equal(true);
				done();
			});
	});
});
