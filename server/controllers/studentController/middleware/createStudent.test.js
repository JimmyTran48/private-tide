const createStudent = require('./createStudent');
const db = require('../../../database');
const { v4: uuidv4 } = require('uuid');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() => Promise.resolve({ rows: ['new student'] })),
}));

jest.mock('uuid', () => ({
  v4: jest.fn(() => 1),
}));

describe('Testing studentController createStudent middleware', () => {
  it('should query the database', async () => {
    const req = {
      body: {
        first_name: 'test',
        last_name: 'student',
        school_id: 1,
        teacher_id: 1,
        instrument: 'my instrument',
        email: 'test@test.com',
        phone_number: '1234567890',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [
      1,
      req.body.first_name,
      req.body.last_name,
      req.body.school_id,
      req.body.teacher_id,
      req.body.instrument,
      req.body.email,
      req.body.phone_number,
    ];

    await createStudent(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.student).toEqual('new student');
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when required fields are not on request object', async () => {
    const req = {
      body: {},
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    await createStudent(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'studentController, createStudent middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
