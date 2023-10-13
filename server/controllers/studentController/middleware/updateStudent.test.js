const updateStudent = require('./updateStudent');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() => Promise.resolve({ rows: ['updated student'] })),
}));

describe('Testing studentController updateStudent middleware', () => {
  it('should query the database', async () => {
    const req = {
      params: {
        id: 1,
      },
      body: {
        school_id: 1,
        lesson_status: 'test status',
        payment_method: 'test payment',
        email: 'test email',
        phone_number: '1234567890',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [
      req.params.id,
      req.body.school_id,
      req.body.lesson_status,
      req.body.payment_method,
      req.body.email,
      req.body.phone_number,
    ];

    await updateStudent(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.student).toEqual('updated student');
    expect(next).toHaveBeenCalled();
  });

  it('should throw an error when required fields are not on request object', async () => {
    const req = {
      params: {},
      body: {},
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    await updateStudent(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'studentController, updateStudent middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
