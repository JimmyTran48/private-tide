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

const { v4: uuidv4 } = require('uuid');

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const createSchool = async (req, res, next) => {
  const { name } = req.body;
  const id = uuidv4();

  const query = 'INSERT INTO schools (id, name) VALUES ($1, $2)';
  await db.query(query, [id, name]);

  return next();
};

module.exports = createSchool;
