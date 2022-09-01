const {ApolloServer, gql} = require('apollo-server');
const {readFileSync} = require('fs');
const {buildSubgraphSchema} = require('@apollo/subgraph');

const typeDefs = gql(readFileSync('./content.graphql', {encoding: 'utf-8'}));
const resolvers = require('./resolvers');
const ContentAPI = require('./datasources/ContentAPI');

const server = new ApolloServer({
  schema: buildSubgraphSchema({typeDefs, resolvers}),
  dataSources: () => {
    return {
      contentAPI: new ContentAPI()
    };
  }
});

const port = 4001 || process.env.PORT;
const subgraphName = 'content';

server
  .listen({port})
  .then(({url}) => {
    console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
  })
  .catch(err => {
    console.error(err);
  });