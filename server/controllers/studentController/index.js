/**
 * **************************************************
 *
 * @module studentController
 *
 * @description
 * studentController is used to create and manage students.
 *
 * **************************************************
 */

const createStudent = require('./middleware/createStudent');
const getStudents = require('./middleware/getStudents');
const updateStudent = require('./middleware/updateStudent');

module.exports = {
  createStudent,
  getStudents,
  updateStudent,
};
