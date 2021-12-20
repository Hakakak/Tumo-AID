const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const QuizType = require("./QuizType");
const QuestionType = require("./QuestionType");
const AnswerType = require("./AnswerType");
const QuContainerType = require("./QuestionContainerType");
const Question = mongoose.model("question");
const QuContainer = mongoose.model("container");
const Quiz = mongoose.model("quiz");
const Answer = mongoose.model("answer");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    Quizes: {
      type: new GraphQLList(QuizType),
      resolve() {
        return Quiz.find({});
      },
    },
    Containers: {
      type: new GraphQLList(QuContainerType),
      resolve() {
        return QuContainer.find({});
      },
    },
    Quiz: {
      type: QuizType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Quiz.findById(id);
      },
    },
    Question: {
      type: QuestionType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parnetValue, { id }) {
        return await Question.findById(id);
      },
    },
    Answer: {
      type: AnswerType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(parnetValue, { id }) {
        return await Answer.find({ question: id });
      },
    },
  }),
});

module.exports = RootQuery;