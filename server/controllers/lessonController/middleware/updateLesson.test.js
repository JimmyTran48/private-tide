const updateLesson = require('./updateLesson');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(),
}));

describe('Testing lessonController updateLesson middleware', () => {
  it('should query the database', async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        payment_status: true,
      },
    };
    const res = {};
    const next = jest.fn();

    const params = [req.params.id, req.body.payment_status];

    await updateLesson(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when required fields are not on request object', async () => {
    const req = {
      params: {},
      body: {},
    };
    const res = {};
    next = jest.fn();

    await updateLesson(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'lessonController, updateLesson middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
