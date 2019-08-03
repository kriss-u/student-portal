const {gql} = require('apollo-server-express');
// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        getStudents: [Student]
        hello: String
    }
    type Student {
        id: ID!
        firstName: String!
        lastName: String!
        email:  String!
        class: ClassName
    }
    
    type Mutation {
        addStudent(firstName: String!, lastName: String!, email: String!, class: String!): Student
    }
    
    enum ClassName {
        ONE
        TWO
        THREE
        FOUR
        FIVE
        SIX
        SEVEN
        EIGHT
        NINE
        TEN
    }
`;

module.exports = typeDefs;