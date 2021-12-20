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

QuContainerSchema.statics.addQuestion = function(id, question, answeres) {
    const Question = require("./QuestionModel");
    
    return this.findById(id).then((container) => {
        const realquestion = new Question({
            container,
            question,
            answeres
        });
        container.questions.push(realquestion);
        return Promise.all([realquestion.save(), container.save()]).then(
            ([container, realquestion]) => container
        );
    })
}

const Container = mongoose.model("container", QuContainerSchema);

module.exports = Container;