const async = require('async');

const {Student} = require('./models/student');


const mongoose = require('mongoose');
// // Get up default Mongoose Connection
// mongoose.connect('mongodb://mongo/student-portal', {useNewUrlParser: true});
//
// // Get the Default Connection
// const db = mongoose.connection;
//
// db.on('error', console.error.bind(console, 'MongoDB connection error: '));

let students = [];

function studentCreate(firstName, lastName, email, className, cb) {
    let student = new Student({firstName: firstName, lastName: lastName, email: email, className: className});
    student.save(function (err) {
        if (err) {
            console.log('Error is: ' + err);
            cb(err, null);
            return;
        }
        console.log('Student is added');
        students.push(student);
        cb(null, student);
    })
}

function createStudents(cb) {
    async.series([
            function (callback) {
                studentCreate('John', 'Doe', 'johndoe@example.com', 'ONE', callback);
            },
            function (callback) {
                studentCreate('Mary', 'Jones', 'maryjones@example.com', 'TWO', callback);
            },
            function (callback) {
                studentCreate('Jane', 'Smith', 'janesmith@example.com', 'THREE', callback);
            },
            function (callback) {
                studentCreate('Peter', 'Parker', 'peterparker@example.com', 'FOUR', callback);
            },
            function (callback) {
                studentCreate('Tony', 'Stark', 'tonystark@example.com', 'FIVE', callback)
            },
        ],
        cb);
}

createStudents(function (err, results) {
    if (err) {
        console.log('Error: ' + err);
    } else {
        console.log('Results' + results)
    }
});