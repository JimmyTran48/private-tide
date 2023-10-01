const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');
const teacherController = require('../controllers/teacherController');

router.post(
  '/',
  authController.hashPassword,
  teacherController.createTeacher,
  (req, res) => {
    return res.status(201).json({
      id: res.locals.teacher.id,
      first_name: res.locals.teacher.first_name,
      last_name: res.locals.teacher.last_name,
    });
  }
);

router.patch('/:username', teacherController.updateTeacher, (req, res) => {
  return res.sendStatus(204);
});

module.exports = router;
