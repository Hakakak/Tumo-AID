//@ts-check
const models = require("../models");
const graphql = require("graphql");
const { GraphQLSchema, printSchema } = graphql;
const RootQueryType = require("./types/RootQueryType");
const Mutations = require("./types/Mutations");

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation: Mutations
});

module.exports = schema;