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
  try {
    const { password } = req.body;

    if (!password) throw 'no password on request body';

    const hashedPassword = await bcrypt.hash(password, salt);

    res.locals.hashedPassword = hashedPassword;

    return next();
  } catch {
    return next({
      log: 'authController, hashPassword middleware',
      status: 500,
      message: 'Could not hash password',
    });
  }
};

module.exports = hashPassword;
