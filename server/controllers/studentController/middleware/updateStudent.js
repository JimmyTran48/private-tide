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
  const { id } = req.params;

  const {
    first_name,
    last_name,
    school_id,
    teacher_id,
    lesson_status,
    instrument,
    payment_method,
    email,
    phone_number,
  } = req.body;

  const query = `
    UPDATE students
    SET first_name = $2, last_name = $3, school_id = $4, teacher_id = $5,
    lesson_status = $6, instrument = $7, payment_method = $8, email = $9, phone_number = $10
    WHERE id = $1;
  `;
  const params = [
    id,
    first_name,
    last_name,
    school_id,
    teacher_id,
    lesson_status,
    instrument,
    payment_method,
    email,
    phone_number,
  ];

  await db.query(query, params);

  return next();
};

module.exports = updateStudent;
