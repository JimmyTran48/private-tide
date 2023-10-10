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

    if (!password)
      return next({
        log: 'authController, hashPassword middleware',
        status: 500,
        message: 'Please enter a password',
      });

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
