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

const StudentSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'You must enter first name']
    },
    lastName: {
        type: String,
        required: [true, 'You must enter last name']
    },
    email: {
        type: String,
        validate: {
            validator: function (v) {
                return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
            },
            message: props => `${props.value} is not a valid email.`
        }
    },
    class: {type: String, enum: [...classNames]},
});

StudentSchema
    .virtual('name',)
    .get(function () {
        return this.firstName + ' ' + this.lastName;
    })
    .set(function (v) {
        this.firstName = v.substr(0, v.indexOf(' '));
        this.lastName = v.substr(v.indexOf(' ') + 1);
    })
;
const Student = mongoose.model('Student', StudentSchema);

const fetchStudentsData = () => {
    return Student.find();
};
module.exports = Student;