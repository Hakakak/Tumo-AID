//@ts-check
const models = require("../models");
const graphql = require("graphql");
const { GraphQLSchema, printSchema } = graphql;
const RootQueryType = require("./types/RootQueryType");

const schema = new GraphQLSchema({
  query: RootQueryType,
});

module.exports = schema;