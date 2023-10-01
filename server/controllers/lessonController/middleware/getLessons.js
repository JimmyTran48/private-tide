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
  const { teacher_id } = req.params;

  const query = `
    SELECT student.first_name, student.last_name, lesson.lesson_date, lesson.price, lesson.payment_status
    FROM lessons AS lesson
    JOIN students AS student ON lesson.student_id = student.id
    WHERE lesson.teacher_id = $1
  `;
  const params = [teacher_id];

  const lessons = await db.query(query, params);

  console.log(lessons.rows);
  res.locals.lessons = lessons.rows;

  return next();
};

module.exports = getlessons;
