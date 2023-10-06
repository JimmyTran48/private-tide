/**
 * **************************************************
 *
 * @module studentController.getStudents
 *
 * @description
 * Selects all students for a specific teacher.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const getStudents = async (req, res, next) => {
  const { teacher_id } = req.params;

  const query = `
    SELECT students.id, students.first_name, students.last_name, schools.name AS school, students.lesson_status,
    students.instrument, students.payment_method, students.email, students.phone_number
    FROM students
    JOIN schools ON students.school_id = schools.id
    WHERE teacher_id = $1;
  `;
  const params = [teacher_id];

  const students = await db.query(query, params);

  res.locals.students = students.rows;

  return next();
};

module.exports = getStudents;
