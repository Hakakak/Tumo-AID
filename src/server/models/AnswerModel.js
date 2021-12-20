//@ts-check
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnswerSchema = new Schema ({
    question: {
        type: Schema.Types.ObjectId,
        ref: "question"
    },
    answer: {
        type: String,
        required: true
    },
    answertype: {
        type: String,
        required: true
    },
    istrue: Boolean
});

const Answer = mongoose.model("answer", AnswerSchema);

module.exports = Answer;