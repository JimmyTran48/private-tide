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
    VALUES ($1);
  `;
  const params = [name];

  await db.query(query, params);

  return next();
};

module.exports = createSchool;
