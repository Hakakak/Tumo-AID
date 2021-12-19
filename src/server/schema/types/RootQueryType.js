const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const QuizType = require("./QuizType");
//const QuestionType = require("./QuestionType");
//const Question = mongoose.model("question");
const Quiz = mongoose.model("quiz");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    Quizs: {
      type: new GraphQLList(QuizType),
      resolve() {
        return Quiz.find({});
      },
    },
    Quiz: {
      type: QuizType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Quiz.findById(id);
      },
    },
    // Question: {
    //   type: QuestionType,
    //   args: { id: { type: new GraphQLNonNull(GraphQLID) } },
    //   resolve(parnetValue, { id }) {
    //     return Question.findById(id);
    //   },
    // },
  }),
});

module.exports = RootQuery;