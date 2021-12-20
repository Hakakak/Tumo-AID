const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestoinSchema = new Schema ({
    container: {
        type: Schema.Types.ObjectId,
        ref: "container"
    },
    question: {
        type: String,
        required: true
    },
    answeres: [ {
        type: Schema.Types.ObjectId,
        ref: "answer"
    } ]
});

QuestoinSchema.statics.findAnsweres = function(id) {
    const answeres = this.findById(id).populate("answeres");
    return answeres.then((question) => {
        return question.answeres;
    });
}

QuestoinSchema.statics.addAnswer = function(id, realanswer, istrue) {
    const Answer = require("./AnswerModel").default;

    return this.findById(id).then((question) => {
        const answer = new Answer({
            question,
            realanswer,
            istrue
        });
        question.answeres.push(answer);
        return Promise.all([answer.save(), question.save()]).then(
            ([question, answer]) => question
        );
    })
}

const Question = mongoose.model("question", QuestoinSchema);

module.exports = Question;