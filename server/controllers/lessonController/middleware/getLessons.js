/**
 * **************************************************
 *
 * @module lessonController.getlessons
 *
 * @description
 * Selects all lessons for a specific teacher.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const getlessons = async (req, res, next) => {
  const { student_id } = req.params;

  const query = `
    SELECT id, lesson_date, payment_status, price
    FROM lessons
    WHERE student_id = $1;
  `;
  const params = [student_id];

  const lessons = await db.query(query, params);

  res.locals.lessons = lessons.rows;

  return next();
};

module.exports = getlessons;
