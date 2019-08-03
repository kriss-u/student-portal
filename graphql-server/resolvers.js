// Provide resolver functions for your schema fields
const Student = require('./models/student');
const Teacher = require('./models/teacher');

const resolvers = {
    Query: {
        getStudent: async (_, args) => await Student.findById(args.id).exec(),
        getStudents: async () => await Student.find({}).exec(),
        getTeacher: async (_, args) => await Teacher.findById(args.id).exec(),
        getTeachers: async () => await Teacher.find({}).exec()
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
        }
    }
};

module.exports = resolvers;