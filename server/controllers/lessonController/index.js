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
const updateLesson = require('./middleware/updateLesson');

module.exports = {
  createLesson,
  updateLesson,
};
