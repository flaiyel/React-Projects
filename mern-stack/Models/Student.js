const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
name: {
    type: String
},
age: {
    type: Number
},
description: {
    type: String
}
},
{
    collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)