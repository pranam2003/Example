const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile:{
        type: String,
        required: true
    },
})

const Person1 = mongoose.model('Person1', personSchema);
module.exports = Person1; 