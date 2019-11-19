const express = require('express');
const router = express.Router();
const Student = require('../models/student')//

router.get('/', function(req, res) {
    Student.find( {}, (err, student) => {
        res.json(student)
    })
})

router.post('/', function(req, res) {
    const newStudent = Student(req.body);
    newStudent.save((err, student) => {
        res.json(student)
    })
})

module.exports = router;