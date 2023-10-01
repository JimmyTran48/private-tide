/**
 * **************************************************
 *
 * @module authController
 *
 * @description
 * authController is used to verify users and add a layer of security.
 *
 * **************************************************
 */

const hashPassword = require('./middleware/hashPassword');
const validatePassword = require('./middleware/validatePassword');

module.exports = {
  hashPassword,
  validatePassword,
};
