const hashPassword = require('./hashPassword');
const bcrypt = require('bcrypt');

jest.mock('bcrypt', () => ({
  hash: jest.fn((password, salt) =>
    Promise.resolve(`hashed password: ${password}: ${salt}`)
  ),
}));


describe('Testing authController hashPassword middleware', () => {
  it('should hash a password', async () => {
    const req = {
      body: {
        password: 'testPassword',
      },
    };
    const res = {
      locals: {},
    };
    const next = jest.fn();

    await hashPassword(req, res, next);

    expect(bcrypt.hash).toHaveBeenCalledWith('testPassword', 10);
    expect(res.locals.hashedPassword).toBe('hashed password: testPassword: 10');
    expect(next).toHaveBeenCalled();
  });
});
