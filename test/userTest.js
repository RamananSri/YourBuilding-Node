const authCtrl = require("../src/controllers/authCtrl");

// Unit + Assertion packages
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
const user = require("../src/models/user");

const should = chai.should();
// const assert = chai.assert();
const expect = chai.expect;

chai.use(chaiHttp);


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
describe("Should delete user", () => {
	it("Should delete a user with given id", done => {
		user = new user({ name: "test", address: "test", phone: "" })
	});
});


// Tester om det er muligt at oprette en bruger, hvis statuscode er 200.
// describe("Create user", () => {
// 	it("Should create user", done => {
// 		var user = {
// 			name: "Daniel",
// 			address: "Sofiendalsvej 60",
// 			phone: "66666666",
// 			email: "daniel070793@gmail.com",
// 			password: "Test"
// 		}
// 		chai.request(app).post("/create").send(user).end((err, res) => {
// 			res.should.have.status(200);
// 			done();
// 		});
// 	});
// });