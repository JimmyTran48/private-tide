/**
 * **************************************************
 *
 * @module teacherController
 *
 * @description
 * teacherController is used to create and manage teachers.
 *
 * **************************************************
 */

const createTeacher = require('./middleware/createTeacher');
const updateTeacher = require('./middleware/updateTeacher');

module.exports = {
  createTeacher,
  updateTeacher,
};
