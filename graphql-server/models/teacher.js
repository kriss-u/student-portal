const mongoose = require('mongoose');
const moment = require('moment'); // For date handling.

const Schema = mongoose.Schema;

const genders = [
    'MALE',
    'FEMALE',
    'OTHER'
];

const TeacherSchema = new Schema({
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
        required: true,
        unique: true,
        validate: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        }
    },
    password: {
        type: String,
        minlength: 8,
        required: true,
    },
    mobileNumber: {
        type: String,
        required: true,
        length: 10,
        validate: {
            validator: function (v) {
                return !(/\D/.test(v))
            },
            message: props => `${props.value} is not a valid mobile number.`
        }
    },
    birthday: {
        type: Date,
        get: v => moment(v).format('YYYY-MM-DD'),
        required: true
    },
    gender: {
        type: String,
        required: true,
        uppercase: true,
        enum: [...genders]
    }
});

TeacherSchema
    .virtual('name')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (v) {
        this.firstName = v.substr(0, v.indexOf(' '));
        this.lastName = v.substr(v.indexOf(' ') + 1);
    });

const Teacher = mongoose.model('Teacher', TeacherSchema);

module.exports = Teacher;