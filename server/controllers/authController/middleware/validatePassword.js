/**
 * **************************************************
 *
 * @module authController.validatePassword
 *
 * @description
 * Uses bcrypt to validate passwords.
 *
 * **************************************************
 */

const bcrypt = require('bcrypt');
const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const validatePassword = async (req, res, next) => {
  const { username, password } = req.body;

  const query = `
    SELECT *
    FROM TEACHERS
    WHERE username = $1
  `;
  const params = [username];

  const teacher = await db.query(query, params);
  const data = teacher.rows[0];

  const validated = await bcrypt.compare(password, data.password);

  if (validated) {
    res.locals.teacher = data;
    return next();
  }

  return next({
    log: 'authController, validatePassword middleware',
    status: 401,
    message: 'Incorrect username or password',
  });
};

module.exports = validatePassword;
