const { ApolloServer, gql } = require('apollo-server');
const axios = require('axios');

// Define your schema here
const typeDefs = gql`
  type Query {
    getFromHelper: HelperResponse
  }

  type Mutation {
    postToHelper: HelperResponse
    putToHelper: HelperResponse
    deleteToHelper: HelperResponse
  }

  type HelperResponse {
    message: String
    data: HelperData
  }

  type HelperData {
    message: String
  }
`;

// Define resolvers for your schema fields
const resolvers = {
  Query: {
    getFromHelper: async () => {
      try {
        const response = await axios.get('http://helper-api:5000');
        return { message: 'GET: Data from Helper Service', data: response.data };
      } catch (error) {
        throw new Error('Error calling Helper Service: ' + error.message);
      }
    },
  },
  Mutation: {
    postToHelper: async () => {
      try {
        const response = await axios.post('http://helper-api:5000');
        return { message: 'POST: Data from Helper Service', data: response.data };
      } catch (error) {
        throw new Error('Error calling Helper Service: ' + error.message);
      }
    },
    putToHelper: async () => {
      try {
        const response = await axios.put('http://helper-api:5000');
        return { message: 'PUT: Data from Helper Service', data: response.data };
      } catch (error) {
        throw new Error('Error calling Helper Service: ' + error.message);
      }
    },
    deleteToHelper: async () => {
      try {
        const response = await axios.delete('http://helper-api:5000');
        return { message: 'DELETE: Data from Helper Service', data: response.data };
      } catch (error) {
        throw new Error('Error calling Helper Service: ' + error.message);
      }
    }
  }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`GraphQL API listening at ${url}`);
});
