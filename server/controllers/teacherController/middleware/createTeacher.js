/**
 * **************************************************
 *
 * @module teacherController.createTeacher
 *
 * @description
 * Creates a new entry in the teacher table.
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

const createTeacher = async (req, res, next) => {
  const { username, first_name, last_name } = req.body;
  const { hashedPassword: password } = res.locals;
  const id = uuidv4();

  const query =
    'INSERT INTO teachers (id, username, password, first_name, last_name) VALUES ($1, $2, $3, $4, $5)';
  const params = [id, username, password, first_name, last_name];

  await db.query(query, params);

  return next();
};

module.exports = createTeacher;
