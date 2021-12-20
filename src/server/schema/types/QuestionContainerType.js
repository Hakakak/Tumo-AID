const mongoose = require("mongoose");
const graphql = require("graphql");
const QuContainer = mongoose.model("container");
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString,
    GraphQLList,
    GraphQLBoolean
} = graphql;

const QuContainerType = new GraphQLObjectType({
    name: "QuContainerType",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        questions: {
            type: new GraphQLList(GraphQLID), 
            resolve(parentValue) {
                return QuContainer.findQuestions(parentValue.id);
            },
        },
        status: { type: GraphQLBoolean },
    }),
});

module.exports = QuContainerType;