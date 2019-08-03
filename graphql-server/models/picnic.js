const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const foodTypes = [
    "VEG",
    "NONVEG"
];

const FoodCostSchema = new Schema({
    foodType: {
        type: String,
        required: true,
        uppercase: true,
        enum: [...foodTypes]
    },
    cost: {
        type: Number,
        required: true,
        validate: {
            validator: v => v >= 0,
            message: props => `${props.value} is not a positive number`
        }
    }
});

const PicnicAttendeeSchema = new Schema({
    student: {
        type: Schema.ObjectId,
        ref: 'Student',
        required: true
    },
    foodType: {
        type: String,
        required: true,
        uppercase: true,
        enum: [...foodTypes]
    },
});

const PicnicSchema = new Schema({
    site: {
      type: String,
      required: true,
    },
    attendees:[PicnicAttendeeSchema],
    attendCost: {
        type: Number,
        required: true,
        validate: {
            validator: v => v >= 0,
            message: props => `${props.value} is not a positive number`
        }
    },
    foodCost: FoodCostSchema
});

const Picnic = mongoose.model('Picnic', PicnicSchema);
const PicnicAttendee = mongoose.model('PicnicAttendee', PicnicAttendeeSchema);
const FoodCost = mongoose.model('FoodCost', FoodCostSchema);

module.exports = {
    Picnic,
    PicnicAttendee,
    FoodCost
};