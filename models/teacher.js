const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    className: String,
    students: [{type: mongoose.Schema.Types.ObjectId, ref: 'Student'}]
}, {
    timestamps:true
});

module.exports = mongoose.model('Teacher', teacherSchema)




