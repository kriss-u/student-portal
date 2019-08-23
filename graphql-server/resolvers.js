// Provide resolver functions for your schema fields
const Student = require('./models/student');
const Teacher = require('./models/teacher');
const {Picnic} = require("./models/picnic");

const resolvers = {
    Query: {
        getStudents: async () => await Student.find({}).exec(),
        getTeachers: async () => await Teacher.find({}).exec(),
        getPicnics: async () => await Picnic.find({}).exec(),
        getStudent: async (_, args) => await Student.findById(args.id).exec(),
        getTeacher: async (_, args) => await Teacher.findById(args.id).exec(),
    },

    Mutation: {
        addStudent: async (_, args) => {
            try {
                return await Student.create(args);
            } catch (e) {
                return e.message;
            }
        },
        addTeacher: async (_, args) => {
            try {
                return await Teacher.create(args);
            } catch (e) {
                return e.message;
            }
        },
        addPicnic: async (_, args) => {
            try {
                return await Picnic.create(args);
            } catch (e) {
                return e.message;
            }
        }
    }
};

module.exports = resolvers;