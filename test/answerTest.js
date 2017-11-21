// process.env.NODE_ENV = "test";

// const questionCtrl = require("../src/controllers/questionCtrl");
// const chai = require("chai");
// const chaiHttp = require("chai-http");
// const app = require("../app");
// var answer = require("../src/models/answer");

// const should = chai.should();
// // const assert = chai.assert();
// const expect = chai.expect;

// describe("Update answer info", () => {
// 	var answer1 = new answer({
// 		description: "hej",
// 		likeCounter: 12,
// 		userId: "asd",
// 		userName: "Brian",
// 		answerDate: "02-02-2002"
// 	});

// 	it("Update answer", done => {
// 		chai
// 			.request(app)
// 			.put("/answers/" + answer1.id)
// 			.send({ description: "hej hej", likeCounter: 15, userId: "asd", userName: "Ramanan", answerDate: "02-02-2002" })
// 			.end((err, res) => {
// 				res.should.have.status(200);
// 				done();
// 			});
// 	});
// });
