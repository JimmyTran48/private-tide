const getSchools = require('./getSchools');
const db = require('../../../database');

jest.mock('../../../database.js', () => ({
  query: jest.fn(() =>
    Promise.resolve({ rows: ['school 1', 'school 2', 'school 3'] })
  ),
}));

describe('Testing schoolController getSchool middleware', () => {
  it('should query the database', async () => {
    req = {};
    res = {
      locals: {},
    };
    next = jest.fn();

    await getSchools(req, res, next);

    expect(db.query).toHaveBeenCalled();
    expect(res.locals.schools).toEqual(['school 1', 'school 2', 'school 3']);
    expect(next).toHaveBeenCalled();
  });
});
