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
  const query = `
    SELECT name, id
    FROM SCHOOLS;
  `;

  const schools = await db.query(query);

  res.locals.schools = schools.rows;

  return next();
};

module.exports = getSchools;
