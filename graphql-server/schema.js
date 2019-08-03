const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        getStudents: [Student]
        getStudent(id: ID!): Student
        getTeacher(id: ID!): Teacher
        getTeachers: [Teacher]
        getPicnics: [Picnic]
    }
    
    type Student {
        id: ID!
        firstName: String!
        lastName: String!
        gender: Gender!
        email:  String!
        age: Int!
        address: String!
        phoneNumber: String!
        rollNumber: String!
        class: ClassName!
    }
    
    type Teacher {
        id: ID!
        firstName: String!
        lastName: String!
        email: String!
        gender: Gender!
        mobileNumber: String!
        birthday: String!

    }
    
    type Picnic {
        site: String!
        attendees: [PicnicAttendee!]
        attendCost: Int!
        foodCost: FoodCost!
    }
    
    type PicnicAttendee {
        student: Student!
        foodType: FoodType!
    }
    
    type FoodCost {
        type: FoodType!
        cost: Int!
    }
    
    type Mutation {
        addStudent(
            firstName: String!, 
            lastName: String!,
            gender: String!,
            email: String!, 
            age: Int!,
            address: String!,
            phoneNumber: String!,
            rollNumber: String!,
            class: String!
        ): Student
        
        addTeacher(
            firstName: String!, 
            lastName: String!, 
            email: String!,
            gender: String!, 
            mobileNumber: String!, 
            birthday: String!
        ): Teacher
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

    enum FoodType {
        VEG
        NONVEG
    }
    
    enum Gender {
        MALE
        FEMALE
        OTHER
    }
`;

module.exports = typeDefs;