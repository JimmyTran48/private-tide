const getAllLessons = require('./getAllLessons');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() => Promise.resolve({ rows: 'all lessons' })),
}));

describe('Testing lessonController getAllLessons middleware', () => {
  it('should query the database', async () => {
    const req = {
      params: {
        teacher_id: 1,
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [req.params.teacher_id];

    await getAllLessons(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.lessons).toEqual('all lessons');
    expect(next).toHaveBeenCalled();
  });

  it('should thrown an error when required fields are not on req.params', async () => {
    const req = {
      params: {},
    };
    const res = {};
    const next = jest.fn();

    await getAllLessons(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'lessonController, getAllLessons middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
