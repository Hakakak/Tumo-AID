const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestoinSchema = new Schema ({
    container: {
        type: Schema.Types.ObjectId,
        ref: "container"
    },
    question: {
        type: String,
    },
    answers: [ {
        type: Schema.Types.ObjectId,
        ref: "answer"
    } ]
});

QuestoinSchema.statics.findAnsweres = async function(id) {
    return this.findById(id)
        .populate("answers")
        .then((question) =>  question.answers );
}

QuestoinSchema.statics.addAnswer = function(id, answer, answertype, istrue) {
    const Answer = require("./AnswerModel");

    if(answertype == null) answertype = "checkbox";
    return this.findById(id).then((question) => {
        const realanswer = new Answer({
            question,
            answer,
            answertype,
            istrue
        });
        question.answers.push(realanswer);
        return Promise.all([realanswer.save(), question.save()]).then(
            ([question, realanswer]) => question
        );
    })
}

const Question = mongoose.model("question", QuestoinSchema);

module.exports = Question;