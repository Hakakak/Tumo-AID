const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestoinSchema = new Schema ({
    poll: {
        type: Schema.Types.ObjectId,
        ref: "poll"
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

QuestoinSchema.statics.findAnsweres = () => {
    const answeres = this.findById(id).populate("answeres");
    return answeres.then((question) => {
        return question.answeres;
    });
}

const Question = mongoose.model("question", QuestoinSchema);

module.exports = Question;