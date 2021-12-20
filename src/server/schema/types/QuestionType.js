const mongoose = require("mongoose");
const graphql = require("graphql");
const Question = mongoose.model("question");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const QuestionType = new GraphQLObjectType({
  name: "QuestionType",
  fields: () => ({
    id: { type: GraphQLID },
    question: {type: GraphQLString},
    quiz: {
      type: require("./QuizType"),
      resolve(parentValue) {
        return Question.findById(parentValue)
          .populate("quiz")
          .then((Question) => {
            return Question.quiz;
          });
      },
    },
    answers: {
      type: new GraphQLList(require("./AnswerType")),
      resolve(parentValue) {
        return Question.findAnsweres(parentValue.id);
      },
    },
  }),
});

module.exports = QuestionType;