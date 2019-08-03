// Provide resolver functions for your schema fields
const Student = require('./models/student');

const resolvers = {
    Query: {
        hello: () => 'Hello world!',
        getStudents: async () => await Student.find({}).exec()
    },
    Mutation: {
        addStudent: async (_, args) => {
            try {
                return await Student.create(args);
            } catch (e) {
                return e.message;
            }
        }
    }
};

module.exports = resolvers;