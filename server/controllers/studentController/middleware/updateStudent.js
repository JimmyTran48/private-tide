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

  const { school_id, lesson_status, payment_method, email, phone_number } =
    req.body;

  const query = `
    UPDATE students
    SET school_id = $2, lesson_status = $3, payment_method = $4, email = $5, phone_number = $6
    WHERE id = $1;
  `;
  const params = [
    id,
    school_id,
    lesson_status,
    payment_method,
    email,
    phone_number,
  ];

  await db.query(query, params);

  return next();
};

module.exports = updateStudent;
