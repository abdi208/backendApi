const express = require('express');
const router = express.Router();
const Teacher = require('../models/teacher')//
const Student = require('../models/student')//

//find all teachers
router.get('/', function(req, res) {
    Teacher.find({}, (err, teachers) => {
        res.json(teachers)
    })
})

//get one teacher by id

router.get('/:id', function(req, res) {
    Teacher.findById(req.params.id, (err, teacher) => {
        res.json(teacher)
    })
})

// Post to teachers
router.post('/', function(req, res) {
    const newTeacher = Teacher(req.body);
    newTeacher.save((err,teacher) => {
        res.json(teacher)
    })
});

router.put('/:id', function(req, res) {
    Teacher.findByIdAndUpdate(req.params.id, req.body,(err, teacher) => {
        res.json(teacher)
    })
})

router.post('/:id/students', function(req, res) {
    console.log("POSTTTTTT")
    Teacher.findById(req.params.id, (err, teacher) => {
        console.log("teachers:", err)
        Student.findById(req.body.studentId, (err, student) => {
            console.log("students:", err)
            teacher.students.push(student);
            teacher.save((err) => {
                console.log(err)
                res.json(teacher)
            })
        })
    })

})

module.exports = router;