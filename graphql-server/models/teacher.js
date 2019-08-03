const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TeacherSchema = new Schema ({
    firstName: {
        type: String,
        set: v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
        required: [true, 'You must enter first name']
    },
    lastName: {
        type: String,
        set: v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
        required: [true, 'You must enter last name']
    },
    email: {
        type: String,
        lowercase: true,
        validate: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        }
    },
});

TeacherSchema
    .virtual('name',)
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (v) {
        this.firstName = v.substr(0, v.indexOf(' '));
        this.lastName = v.substr(v.indexOf(' ') + 1);
    });

const Student = mongoose.model('Teacher', TeacherSchema);

module.exports = Student;