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
  try {
    const { name } = req.body;

    if (!name)
      return next({
        log: 'schoolController, schoolLesson middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
    INSERT INTO schools (name)
    VALUES ($1)
    RETURNING *
  `;
    const params = [name];

    const school = await db.query(query, params);

    res.locals.school = school.rows[0];

    return next();
  } catch {
    return next({
      log: 'schoolController, schoolLesson middleware',
      status: 500,
      message: 'Could not create school',
    });
  }
};

module.exports = createSchool;
