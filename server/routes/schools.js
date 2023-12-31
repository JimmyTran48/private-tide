const express = require('express');

const router = express.Router();

const schoolController = require('../controllers/schoolController');

router.get('/', schoolController.getSchools, (req, res) => {
  return res.status(200).json(res.locals.schools);
});

router.post('/', schoolController.createSchool, (req, res) => {
  return res.status(201).json(res.locals.school);
});

module.exports = router;