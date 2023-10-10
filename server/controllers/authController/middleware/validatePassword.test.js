const validatePassword = require('./validatePassword');
const bcrypt = require('bcrypt');
const db = require('../../../database');

jest.mock('bcrypt', () => ({
  compare: jest.fn(() => Promise.resolve()),
}));

jest.mock('../../../database', () => ({
  query: jest.fn(() => {
    return { rows: [{ password: 'hashed password' }] };
  }),
}));

describe('Testing authController validatePassword middleware', () => {
  it('should handle a correct password', async () => {
    const req = {
      body: {
        username: 'testUser',
        password: 'testPassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    bcrypt.compare.mockReturnValueOnce(true);

    await validatePassword(req, res, next);

    expect(db.query).toHaveBeenCalled();
    expect(bcrypt.compare).toHaveBeenCalledWith(
      'testPassword',
      'hashed password'
    );
    expect(res.locals.teacher).toEqual({ password: 'hashed password' });
    expect(next).toHaveBeenCalled();
  });

  it('should handle an incorrect password', async () => {
    const req = {
      body: {
        username: 'testUser',
        password: 'testPassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    bcrypt.compare.mockReturnValueOnce(false);

    await validatePassword(req, res, next);

    expect(res.locals.teacher).toBeUndefined();
    expect(next).toHaveBeenCalledWith({
      log: 'authController, validatePassword middleware',
      status: 401,
      message: 'Incorrect username or password',
    });
  });

  it('should throw an error when username or password is not on req.body', async () => {
    const req = {
      body: {},
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    await validatePassword(req, res, next);

    expect(next).toHaveBeenCalledWith({
      log: 'authController, validatePassword middleware',
      status: 500,
      message: 'Please enter a username and password',
    });
  });
});
