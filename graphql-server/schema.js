const {gql} = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
    type Query {
        getStudents: [Student]
        getPicnics: [Picnic]
        getTeachers: [Teacher]
        getStudent(id: ID!): Student
        getTeacher(id: ID!): Teacher
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
        foodCost: [FoodCost!]
    }
    
    type PicnicAttendee {
        student: Student!
        foodType: FoodType!
    }
    
    type FoodCost {
        foodType: FoodType!
        cost: Int!
    }
    
    input FoodCostInput {
        foodType: FoodType!
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
        
        addPicnic(
            site: String!,
            attendCost: Int!
            foodCost: [FoodCostInput] 
        ): Picnic
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