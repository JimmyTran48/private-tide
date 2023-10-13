/**
 * **************************************************
 *
 * @module studentController.updateStudents
 *
 * @description
 * Update a student in the database.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const updateStudent = async (req, res, next) => {
  try {
    const { id } = req.params;

    const { school_id, lesson_status, payment_method, email, phone_number } =
      req.body;

    if ((!id || !school_id, !lesson_status, !payment_method))
      return next({
        log: 'studentController, updateStudent middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
  WITH updated_student AS (
    UPDATE students
    SET school_id = $2, lesson_status = $3, payment_method = $4, email = $5, phone_number = $6
    WHERE id = $1
    RETURNING *
  )
  SELECT
    updated_student.id,
    updated_student.first_name,
    updated_student.last_name,
    updated_student.instrument,
    updated_student.email,
    updated_student.phone_number,
    updated_student.lesson_status,
    updated_student.payment_method,
    schools.name as school
  FROM 
    updated_student
  JOIN 
    schools ON updated_student.school_id = schools.id;
    `;
    const params = [
      id,
      school_id,
      lesson_status,
      payment_method,
      email,
      phone_number,
    ];

    const updated_student = await db.query(query, params);

    res.locals.student = updated_student.rows[0];

    return next();
  } catch {
    return next({
      log: 'studentController, updateStudent middleware',
      status: 500,
      message: 'Could not update student',
    });
  }
};

module.exports = updateStudent;
