const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuizSchema = new Schema ({
    name: String,
    description: String,
    questions: [ {
        type: Schema.Types.ObjectId,
        ref: "question"
    } ],
    status: {type: Boolean}
});

QuizSchema.statics.findQuestions = function(id) {
    const questions = this.findById(id).populate("questions");

    return questions.then((Quiz) => {
        return Quiz.questions;
    });
}

QuizSchema.statics.addQuestion = function(containerid, quizid, realquestion, answeres) {
    const Container = require("./QuestionContainerModel");
    const Question = require("./QuestionModel");

    return Container.findById(containerid).populate("questions").then((container) => {
        let contained = true;
        container.questions.forEach((element) => {
            console.log(element.question);
            if (element.question == realquestion) {
                let questio = element;
                contained = false;
                this.findById(quizid).then((quiz) => {
                    quiz.questions.push(questio);
                    console.log("You found me bro");
                    console.log(element);
                    return Promise.all([quiz.save()]).then(
                        ([quiz]) => quiz
                    );
                });
            }
        });

        if(contained){
            Container.addQuestion(containerid, realquestion, answeres);
            this.addQuestion(containerid, quizid, realquestion, answeres);
        }
        // if(contained){
        //     console.log("Nah bro I dont exist");
        //     const altquestion = new Question({
        //         container,
        //         realquestion,
        //         answeres
        //     });
        //     console.log("Pushing model");
        //     container.questions.push(altquestion);
        //     console.log("Pushed model");
        //     await this.findById(quizid).then((quiz) => {
        //         console.log("Pushing model to quiz");
        //         quiz.questions.push(altquestion);
        //         console.log("Pushed model to quiz");
        //         return Promise.all([quiz.save()]).then(
        //             ([quiz]) => quiz
        //             );
        //         });
        //         console.log("Quiz saved");
        //     return Promise.all([altquestion.save(), container.save()]).then(
        //         ([container, altquestion]) => container
        //     );
        // }
    });
}

const Quiz = mongoose.model("quiz", QuizSchema);

module.exports = Quiz;