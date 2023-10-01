/**
 * **************************************************
 *
 * @module teacherController.updateTeacher
 *
 * @description
 * Updates an entry in the teacher table.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const updateTeacher = async (req, res, next) => {
  const { username } = req.params;
  const { first_name, last_name } = req.body;

  const query = `
    UPDATE teachers 
    SET first_name = $2, last_name = $3
    WHERE username = $1;
    `;
  const params = [username, first_name, last_name];

  await db.query(query, params);

  return next();
};

module.exports = updateTeacher;
