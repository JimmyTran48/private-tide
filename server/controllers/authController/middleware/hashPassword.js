/**
 * **************************************************
 *
 * @module authController.hashPassword
 *
 * @description
 * Uses bcrypt to hash passwords.
 *
 * **************************************************
 */

const bcrypt = require('bcrypt');

const salt = 10;
/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword = await bcrypt.hash(password, salt);

  res.locals.hashedPassword = hashedPassword;

  return next();
};

module.exports = hashPassword;
