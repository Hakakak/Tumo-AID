const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList, GraphQLBoolean } = graphql;
const mongoose = require("mongoose");
const Quiz = mongoose.model("quiz");
const QuContainer = mongoose.model("container");
const QuContainerType = require("./QuestionContainerType");
const Question = mongoose.model("question");
const QuizType = require("./QuizType");
const QuestionType = require("./QuestionType");
const AnswerType = require("./AnswerType");

// const mutation = new GraphQLObjectType({
//   name: "Mutation",
//   fields: {
//     addQuiz: {
//       type: QuizType,
//       args: {
//         name: { type: GraphQLString },
//       },
//       resolve(parentValue, { name }) {
//         return new Quiz({ name }).save();
//       },
//     },
//     addQuestionToQuiz: {
//       type: QuizType,
//       args: {
//         id: { type: GraphQLID },
//         question: { type: QuestionType },
//         answers: { type: GraphQLList(AnswerType) },
//       },
//       resolve(parentValue, { question, id, answers }) {
//         return Quiz.addQuestion(id, question, answers);
//       },
//     },
//     addAnswerToQuiz: {
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
    addQuiz: {
      type: QuizType,
      args: {
        name: { type: GraphQLString },
        status: { type: GraphQLBoolean },
      },
      resolve(parentValue, { name, status }) {
        return Quiz.create({ name, status });
      },
    },
    addQuestionToDataBase: {
      type: QuizType,
      args: {
        id: { type: GraphQLID , required: true},
        question: { type: GraphQLString },
        answers: { type: GraphQLList(GraphQLID) },
      },
      resolve(parentValue, { question, id, answers }) {
        return QuContainer.addQuestion(id, question, answers);
      },
    },
    addAnswerToDataBase: {
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
    addContainer: {
      type: QuContainerType,
      args: {
        name: { type: GraphQLString , required: true},
        status: { type: GraphQLBoolean },
      },
      resolve(parentValue, {name, status}){
        return QuContainer.create({name, status});
      }
    }
  },
});

module.exports = mutation;