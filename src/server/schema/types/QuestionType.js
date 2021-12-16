const mongoose = require("mongoose");
const graphql = require("graphql");
const Question = mongoose.model("question");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
} = graphql;

const QuestionType = new GraphQLObjectType({
  name: "QuestionType",
  fields: () => ({
    id: { type: GraphQLID },
    question: {type: GraphQLString},
    poll: {
      type: require("./PollType"),
      resolve(parentValue) {
        return Question.findById(parentValue)
          .populate("poll")
          .then((Question) => {
            console.log(Question);
            return Question.poll;
          });
      },
    },
    answers: {
      type: require("./AnswerType"),
      resolve(parentValue) {
        return Question.findAnsweres(parentValue.id);
      },
    },
  }),
});

module.exports = QuestionType;