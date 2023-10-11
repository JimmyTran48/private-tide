/**
 * **************************************************
 *
 * @module schoolController.getSchools
 *
 * @description
 * Retrieves all school names from database
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const getSchools = async (req, res, next) => {
  try {
    const query = `
    SELECT name, id
    FROM SCHOOLS;
  `;

    const schools = await db.query(query);

    res.locals.schools = schools.rows;

    return next();
  } catch {
    return next({
      log: 'schoolController, getSchools middleware',
      status: 500,
      message: 'Missing fields',
    });
  }
};

module.exports = getSchools;
