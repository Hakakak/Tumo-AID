const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema ({
    name: String,
    questions: [ {
        type: Schema.Types.ObjectId,
        ref: "question"
    } ],
    status: {type: Boolean}
});

QuizSchema.statics.findQuestions = function(id) {
    const questions = this.findOne({id: id}).populate("questions");

    return questions.then((Quiz) => {
        return Quiz.questions;
    });
}

QuizSchema.statics.addQuestion = function(id, QuizQuestion, answers) {
    const Question = require("./QuestionModel").default;

    return this.findOne({id: id}).then((Quiz) => {
        const question = new Question({
            Quiz,
            QuizQuestion,
            answers
        });
        Quiz.questions.push(question);
        return Promise.all([question.save(), Quiz.save()]).then(
            ([question, Quiz]) => Quiz
        );
    })
}

const Quiz = mongoose.model("quiz", QuizSchema);

module.exports = Quiz;