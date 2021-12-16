const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PollSchema = new Schema ({
    name: String,
    questions: [ {
        type: Schema.Types.ObjectId,
        ref: "question"
    } ],
    status: {type: Boolean, required: true}
});

PollSchema.statics.findQuestions = (id) => {
    const questions = this.findById(id).populate("questions");
    return questions.then((poll) => {
        return poll.questions;
    });
}

PollSchema.statics.addQuestion = (id, pollQuestion, answers) => {
    const Question = require("./QuestionModel").default;

    return this.findById(id).then((poll) => {
        const question = new Question({
            poll,
            pollQuestion,
            answers
        });
        poll.questions.push(question);
        return Promise.all([question.save(), poll.save()]).then(
            ([question, poll]) => poll
        );
    })
}

const Poll = mongoose.model("poll", PollSchema);

module.exports = Poll;