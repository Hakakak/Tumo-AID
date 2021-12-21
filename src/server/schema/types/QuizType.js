const mongoose = require("mongoose");
const graphql = require("graphql");
const Quiz = mongoose.model("quiz");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} = graphql;

const QuizType = new GraphQLObjectType({
    name: "QuizType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        description: { type: GraphQLString},
        questions: {
            type: new GraphQLList(GraphQLID), 
            resolve(parentValue) {
                return Quiz.findQuestions(parentValue.id);
            },
        },
        status: { type: GraphQLBoolean },
    }),
});

module.exports = QuizType;