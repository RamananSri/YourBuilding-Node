const questionSchema = mongoose.Schema;
const validator = require("validator");
const mongoose = require("mongoose");
const answer = require('answer');

var questionModel = new questionSchema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    subCategory:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    answers:{
        type: [answer],
        required: false
    },
    picture:{
        data: Buffer,
        contentType: String,
        required: false
    }
})

module.exports = mongoose.model('questions', questionModel);