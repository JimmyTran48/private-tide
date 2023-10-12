const getStudents = require('./getStudents');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() =>
    Promise.resolve({ rows: ['student 1', 'student 2', 'student 3'] })
  ),
}));

describe('Testing studentController getStudents middleware', () => {
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

    await getStudents(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.students).toEqual([
      'student 1',
      'student 2',
      'student 3',
    ]);
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when required fields are not on request object', async () => {
    const req = {
      params: {},
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    await getStudents(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'studentController, getStudents middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
