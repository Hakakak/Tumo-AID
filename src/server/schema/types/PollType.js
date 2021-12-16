const mongoose = require("mongoose");
const graphql = require("graphql");
const Poll = mongoose.model("poll");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList
} = graphql;

const PollType = new GraphQLObjectType({
    name: "PollType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString},
        questions: {
            type: new GraphQLList(), //require("./QuestionType")
            resolve(parentValue) {
                return Poll.findQuestions(parentValue.id);
            },
        },
        status: { type: GraphQLBoolean },
    }),
});

module.exports = PollType;