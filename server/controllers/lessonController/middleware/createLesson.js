/**
 * **************************************************
 *
 * @module lessonController.createLesson
 *
 * @description
 * Creates a new entry in the lesson table.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const createLesson = async (req, res, next) => {
  try {
    const { teacher_id, student_id, lesson_date, price } = req.body;

    if ((!teacher_id, !student_id, !lesson_date, !price))
      return next({
        log: 'lessonController, createLesson middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
    INSERT INTO lessons (teacher_id, student_id, lesson_date, price)
    VALUES ($1, $2, $3, $4);
    `;
    const params = [teacher_id, student_id, lesson_date, price];

    await db.query(query, params);

    return next();
  } catch {
    return next({
      log: 'lessonController, createLesson middleware',
      status: 500,
      message: 'Could not create',
    });
  }
};

module.exports = createLesson;
