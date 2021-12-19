const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuContainerChema = new Schema ({
    questions: {
        type: Schema.Types.ObjectId,
        ref: "question"
    },
});

QuContainerChema.statics.findQuestions = (id) => {
    const questions = this.findById(id).populate("questions");
    return questions.then((container) => {
        return container.questions;
    });
}

QuContainerChema.statics.addQuestion = (id, questionString, answeres) => {
    const Question = require("./QuestionModel").default;
    
    return this.findById(id).then((container) => {
        const question = new Question({
            container,
            questionString,
            answeres
        });
        container.questions.push(question);
        return Promise.all([question.save(), container.save()]).then(
            ([container, question]) => container
        );
    })
}

const Container = mongoose.model("container", QuContainerChema);

module.exports = Container;