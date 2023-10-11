/**
 * **************************************************
 *
 * @module studentController.createStudent
 *
 * @description
 * Creates a new entry in the student table.
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

const createStudent = async (req, res, next) => {
  try {
    const {
      first_name,
      last_name,
      school_id,
      teacher_id,
      instrument,
      email,
      phone_number,
    } = req.body;

    if ((!first_name, !last_name, !school_id, !teacher_id, !instrument))
      return next({
        log: 'studentController, createStudent middleware',
        status: 500,
        message: 'Missing fields',
      });

    const id = uuidv4();

    const query = `
  WITH inserted_student AS (
    INSERT INTO students (id, first_name, last_name, school_id, teacher_id, instrument, email, phone_number)
    VALUES($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *
  )
  SELECT
    inserted_student.id,
    inserted_student.first_name,
    inserted_student.last_name,
    inserted_student.instrument,
    inserted_student.email,
    inserted_student.phone_number,
    inserted_student.lesson_status,
    inserted_student.payment_method,
    schools.name as school
  FROM 
    inserted_student
  JOIN 
    schools ON inserted_student.school_id = schools.id;
    `;

    const params = [
      id,
      first_name,
      last_name,
      school_id,
      teacher_id,
      instrument,
      email,
      phone_number,
    ];

    const student = await db.query(query, params);
    res.locals.student = student.rows[0];

    return next();
  } catch {
    return next({
      log: 'studentController, createStudent middleware',
      status: 500,
      message: 'Could not create student',
    });
  }
};

module.exports = createStudent;
