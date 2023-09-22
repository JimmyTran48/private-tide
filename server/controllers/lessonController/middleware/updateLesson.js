/**
 * **************************************************
 *
 * @module lessonController.updateLesson
 *
 * @description
 * Updates an entry in the lesson table.
 *
 * **************************************************
 */

const db = require('../../../database');

/**
 * ====================================
 *        MIDDLEWARE FUNCTION
 * ====================================
 */

const updateLesson = async (req, res, next) => {
  const { id } = req.params;
  const { payment_status } = req.body;

  const query = `
  UPDATE lessons
  SET payment_status = $2
  WHERE id = $1;
  `;
  await db.query(query, [id, payment_status]);

  return next();
};

module.exports = updateLesson;