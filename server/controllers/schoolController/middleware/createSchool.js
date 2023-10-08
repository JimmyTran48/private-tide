/**
 * **************************************************
 *
 * @module schoolController.createSchool
 *
 * @description
 * Creates a new entry in the school table.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const createSchool = async (req, res, next) => {
  const { name } = req.body;

  const query = `
    INSERT INTO schools (name)
    VALUES ($1)
    RETURNING *
  `;
  const params = [name];

  const school = await db.query(query, params);

  res.locals.school = school.rows[0];

  return next();
};

module.exports = createSchool;
