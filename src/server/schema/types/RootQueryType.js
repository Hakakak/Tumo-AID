//@ts-check
const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const PollType = require("./PollType");
//const QuestionType = require("./QuestionType");
//const Question = mongoose.model("question");
const Poll = mongoose.model("poll");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    polls: {
      type: new GraphQLList(PollType),
      resolve() {
        return Poll.find({});
      },
    },
    poll: {
      type: PollType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Poll.findById(id);
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