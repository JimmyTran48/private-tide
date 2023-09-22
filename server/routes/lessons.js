const express = require('express');

const router = express.Router();

const lessonController = require('../controllers/lessonController');

router.post('/', lessonController.createLesson, (req, res) => {
  return res.sendStatus(201);
});

router.get('/:teacher_id', lessonController.getLessons, (req, res) => {
  return res.status(200).json(res.locals.lessons);
});

router.patch('/:id', lessonController.updateLesson, (req, res) => {
  return res.sendStatus(204);
});

module.exports = router;