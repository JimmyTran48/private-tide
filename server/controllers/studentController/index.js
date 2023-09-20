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

module.exports = {
  createStudent,
  getStudents,
};
