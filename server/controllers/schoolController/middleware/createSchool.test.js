const createSchool = require('./createSchool');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() => Promise.resolve({ rows: ['new school'] })),
}));

describe('Testing schoolController createSchool middleware', () => {
  it('should query the database', async () => {
    const req = {
      body: {
        name: 'test school',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    const params = [req.body.name];

    await createSchool(req, res, next);

    expect(db.query.mock.calls[0][1]).toEqual(params);
    expect(res.locals.school).toEqual('new school');
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

    await createSchool(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'schoolController, createSchool middleware',
      status: 500,
      message: 'Missing fields',
    });
  });
});
