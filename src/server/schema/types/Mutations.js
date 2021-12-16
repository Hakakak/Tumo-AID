const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = graphql;
const mongoose = require("mongoose");
const Poll = mongoose.model("poll");
const Question = require("../../models/QuestionModel");
const PollType = require("./PollType");
const QuestionType = require("./QuestionType");
const AnswerType = require("./AnswerType");
const { GraphQLBoolean } = require("graphql");

// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addPoll: {
//       type: PollType,
//       args: {
//         name: { type: GraphQLString },
//       },
//       resolve(parentValue, { name }) {
//         return new Poll({ name }).save();
//       },
//     },
//     addQuestionToPoll: {
//       type: PollType,
//       args: {
//         id: { type: GraphQLID },
//         question: { type: QuestionType },
//         answers: { type: GraphQLList(AnswerType) },
//       },
//       resolve(parentValue, { question, id, answers }) {
//         return Poll.addQuestion(id, question, answers);
//       },
//     },
//     addAnswerToPoll: {
//       type: QuestionType,
//       args: { 
//           id: { type: GraphQLID },
//           answer: { type: AnswerType },
//           istrue: { type: GraphQLBoolean },
//       },
//       resolve(parentValue, { id , answer, istrue}) {
//         return Question.addAnswer(id, answer, istrue);
//       },
//     },
//   },
// });

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addPoll: {
      type: PollType,
      args: {
        name: { type: GraphQLString },
      },
      resolve(parentValue, { name }) {
        return new Poll({ name }).save();
      },
    },
    addQuestionToPoll: {
      type: PollType,
      args: {
        id: { type: GraphQLID },
        question: { type: GraphQLString },
        answers: { type: GraphQLList(GraphQLString) },
      },
      resolve(parentValue, { question, id, answers }) {
        return Poll.addQuestion(id, question, answers);
      },
    },
    addAnswerToPoll: {
      type: QuestionType,
      args: { 
          id: { type: GraphQLID },
          answer: { type: GraphQLString },
          istrue: { type: GraphQLBoolean },
      },
      resolve(parentValue, { id , answer, istrue}) {
        return Question.addAnswer(id, answer, istrue);
      },
    },
  },
});

module.exports = mutation;