/**
 * **************************************************
 *
 * @module lessonController.getAllLessons
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

const getAllLessons = async (req, res, next) => {
  try {
    const { teacher_id } = req.params;

    if (!teacher_id)
      return next({
        log: 'lessonController, getAllLessons middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
    SELECT student.first_name, student.last_name, lesson.lesson_date, lesson.price, lesson.payment_status
    FROM lessons AS lesson
    JOIN students AS student ON lesson.student_id = student.id
    WHERE lesson.teacher_id = $1
  `;
    const params = [teacher_id];

    const lessons = await db.query(query, params);

    res.locals.lessons = lessons.rows;

    return next();
  } catch {
    return next({
      log: 'lessonController, getAllLessons middleware',
      status: 500,
      message: 'Could not fetch lessons',
    });
  }
};

module.exports = getAllLessons;
