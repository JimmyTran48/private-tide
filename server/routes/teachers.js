const express = require('express');

const router = express.Router();

const authController = require('../controllers/authController');
const teacherController = require('../controllers/teacherController');

router.post(
  '/',
  authController.hashPassword,
  teacherController.createTeacher,
  (req, res) => {
    return res.sendStatus(201);
  }
);

router.patch('/', teacherController.updateTeacher, (req, res) => {
  return res.sendStatus(204);
});

module.exports = router;
