/**
 * **************************************************
 *
 * @module lessonController
 *
 * @description
 * lessonController is used to create and manage lessons.
 *
 * **************************************************
 */

const createLesson = require('./middleware/createLesson');
const getLessons = require('./middleware/getLessons');
const getAllLessons = require('./middleware/getAllLessons');
const updateLesson = require('./middleware/updateLesson');

module.exports = {
  createLesson,
  getLessons,
  getAllLessons,
  updateLesson,
};
