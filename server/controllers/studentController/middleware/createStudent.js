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
  const {
    first_name,
    last_name,
    school_id,
    teacher_id,
    instrument,
    email,
    phone_number,
  } = req.body;

  const id = uuidv4();

  const query =
    'INSERT INTO students (id, first_name, last_name, school_id, teacher_id, instrument, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);';
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

  await db.query(query, params);

  return next();
};

module.exports = createStudent;
