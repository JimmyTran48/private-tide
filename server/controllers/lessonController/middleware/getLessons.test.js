const getLessons = require('./getLessons');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() => Promise.resolve({ rows: 'lessons' })),
}));

describe('Testing lessonController getLessons middleware', () => {
  it('should query the database', async () => {
    const req = {
      params: {
        student_id: 1,
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [req.params.student_id];

    await getLessons(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.lessons).toEqual('lessons');
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when required fields are not on req.params', async () => {
    const req = {
      params: {},
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [req.params.student_id];

    await getLessons(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'lessonController, getLessons middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
