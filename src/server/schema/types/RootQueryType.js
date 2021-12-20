const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const QuizType = require("./QuizType");
const QuestionType = require("./QuestionType");
const QuContainerType = require("./QuestionContainerType");
const QuContainer = mongoose.model("container");
const Quiz = mongoose.model("quiz");

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
      resolve(parnetValue, { id }) {
        return QuContainer.findById(id);
      },
    },
  }),
});

module.exports = RootQuery;