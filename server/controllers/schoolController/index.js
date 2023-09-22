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
const getSchools = require('./middleware/getSchools');

module.exports = {
  createSchool,
  getSchools,
};
