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
  try {
    const { id } = req.params;
    const { payment_status } = req.body;

    if (!id || !payment_status)
      return next({
        log: 'lessonController, updateLesson middleware',
        status: 500,
        message: 'Missing fields',
      });

    const query = `
    UPDATE lessons
    SET payment_status = $2
    WHERE id = $1;
  `;
    const params = [id, payment_status];

    await db.query(query, params);

    return next();
  } catch {
    return next({
      log: 'lessonController, updateLesson middleware',
      status: 500,
      message: 'Could not update lesson',
    });
  }
};

module.exports = updateLesson;
