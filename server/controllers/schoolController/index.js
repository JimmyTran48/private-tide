/**
 * **************************************************
 *
 * @module schoolController
 *
 * @description
 * schoolController is used to create and manage schools.
 *
 * **************************************************
 */

const createSchool = require('./middleware/createSchool');
const getAllSchools = require('./middleware/getAllSchools');

module.exports = {
  createSchool,
  getAllSchools,
};
