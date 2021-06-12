import {  gql } from 'apollo-server-express'
const typeDefs = gql`
    type animal {
        _id: ID!
        name: String!
        color: String!
        age: Int!
      }
    type Query {
        allAnimals: [animal]
    }
    type Mutation {
        addAnimal(name: String, color: String, age: String): animal
    }
`;

export default typeDefs