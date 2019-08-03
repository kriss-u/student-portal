const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const classNames = [
    'ONE',
    'TWO',
    'THREE',
    'FOUR',
    'FIVE',
    'SIX',
    'SEVEN',
    'EIGHT',
    'NINE',
    'TEN'
];

const genders = [
    'MALE',
    'FEMALE',
    'OTHER'
];

const StudentSchema = new Schema({
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
    gender: {
        type: String,
        required: true,
        uppercase: true,
        enum: [...genders]
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
    age: {
        type: Number,
        required: true,
        validate: {
            validator: v => v >= 0,
            message: props => `${props.value} is not a positive number`
        }
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true,
        length: 10,
        validate: {
            validator: function (v) {
                return !(/\D/.test(v))
            },
            message: props => `${props.value} is not a valid phone number.`
        }
    },
    rollNumber: {
        type: String,
        required: true
    },
    class: {
        type: String,
        uppercase: true,
        enum: [...classNames]
    },
});

StudentSchema
    .virtual('name')
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (v) {
        this.firstName = v.substr(0, v.indexOf(' '));
        this.lastName = v.substr(v.indexOf(' ') + 1);
    });

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student;