const createLesson = require('./createLesson');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(),
}));

describe('Testing lessonController createLesson middleware', () => {
  it('should query the database', async () => {
    const req = {
      body: { teacher_id: 1, student_id: 1, lesson_date: 'today', price: 1 },
    };
    const res = {};
    const next = jest.fn();

    const params = [
      req.body.teacher_id,
      req.body.student_id,
      req.body.lesson_date,
      req.body.price,
    ];

    await createLesson(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(next).toHaveBeenCalled();
  });

  it('should thrown an error when required fields are not on req.body', async () => {
    const req = {
      body: {},
    };
    const res = {};
    const next = jest.fn();

    await createLesson(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'lessonController, createLesson middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
