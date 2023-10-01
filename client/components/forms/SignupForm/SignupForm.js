import React from 'react';

const SignupForm = () => {
  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <form>
        <div className='mb-4'>
          <label htmlFor='username' className='block font-semibold mb-2'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your username'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='firstName' className='block font-semibold mb-2'>
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your first name'
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='lastName' className='block font-semibold mb-2'>
            Last Name
          </label>
          <input
            type='text'
            id='lastName'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your last name'
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='password' className='block font-semibold mb-2'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your password'
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700'>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
