const express = require('express');

const router = express.Router();

const studentController = require('../controllers/studentController');

router.post('/', studentController.createStudent, (req, res) => {
  return res.status(201).json(res.locals.student);
});

router.get('/:teacher_id', studentController.getStudents, (req, res) => {
  return res.status(200).json(res.locals.students);
});

router.patch('/:id', studentController.updateStudent, (req, res) => {
  return res.status(200).json(res.locals.student);
});

module.exports = router;
