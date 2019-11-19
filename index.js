const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Teacher = require('./models/teacher');

app.use(express.urlencoded({ extended: false, useUnifiedTopology: true }));
app.use(express.json());
mongoose.connect('mongodb://localhost/schoolList');

const db = mongoose.connection;

db.once('open', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
});
db.on('error', function(err) {
    console.error(`Database error:\n${err}`);
});

app.get("/", function(req, res) {
    res.send('hi')
})

app.use('/teachers', require('./routes/teachers'))
app.use('/students', require('./routes/students'))
app.listen(3001)