//@ts-check
const graphql = require("graphql");
const { GraphQLSchema, printSchema } = graphql;
const fs = require("fs");
const Schema = require("../src/server/schema/schema");

const fileData = printSchema(Schema);
fs.writeFile("./src/server/schema/schema.graphql", fileData, (error) => {
  if (error) {
    console.error(error);
  }
});