const mongoose = require("mongoose");
const graphql = require("graphql");
const Answer = mongoose.model("answer");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLBoolean
} = graphql;

const AnswerType = new GraphQLObjectType({
  name: "AnswerType",
  fields: () => ({
    id: { type: GraphQLID },
    answer: { type: GraphQLString },
    answertype: { type: GraphQLString },
    istrue: { type: GraphQLBoolean },
    question: {
      type: require("./QuestionType"),
      resolve(parentValue) {
        return Answer.findById(parentValue)
          .populate("question")
          .then((answer) => {
            console.log(answer);
            return answer.question;
          });
      },
    },
  }),
});

module.exports = AnswerType;