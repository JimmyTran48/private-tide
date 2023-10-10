/**
 * **************************************************
 *
 * @module lessonController.getlessons
 *
 * @description
 * Selects all lessons from a specific student .
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
  try {
    const { student_id } = req.params;

    if (!student_id)
      return next({
        log: 'lessonController, getLessons middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
    SELECT id, lesson_date, payment_status, price
    FROM lessons
    WHERE student_id = $1;
  `;
    const params = [student_id];

    const lessons = await db.query(query, params);

    res.locals.lessons = lessons.rows;

    return next();
  } catch {
    return next({
      log: 'lessonController, getLessons middleware',
      status: 500,
      message: 'Could not fetch lessons',
    });
  }
};

module.exports = getlessons;
