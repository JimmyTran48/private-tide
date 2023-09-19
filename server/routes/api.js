const express = require('express');

const router = express.Router();

//  routes
const teachers = require('./teachers');
const schools = require('./schools');
const students = require('./students');
const lessons = require('./lessons');
const sessions = require('./sessions');

router.use('/teachers', teachers);
router.use('/schools', schools);
router.use('/students', students);
router.use('/lessons', lessons);
router.use('/sessions', sessions);

module.exports = router;
