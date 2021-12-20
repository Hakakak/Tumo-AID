const { GraphQLString, GraphQLBoolean } = require("graphql");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuContainerSchema = new Schema ({
    name: {
        type: GraphQLString
    },
    questions: [ {
        type: Schema.Types.ObjectId,
        ref: "question"
    } ],
    status: { 
        type: GraphQLBoolean 
    }
});

QuContainerSchema.statics.findQuestions = function(id) {
    return this.findById(id)
        .populate("questions")
        .then((container) =>  container.questions );
}

QuContainerSchema.statics.addQuestion = function(id, questionString, answeres) {
    const Question = require("./QuestionModel");
    
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

const Container = mongoose.model("container", QuContainerSchema);

module.exports = Container;