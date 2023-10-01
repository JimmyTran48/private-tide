import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { updateInformation } from '../../../store/slice/teacherSlice';

const SignupForm = ({ close }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const { username, first_name, last_name, password } = formData;
    const response = await fetch('/api/teachers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, first_name, last_name, password }),
    });
    const data = await response.json();

    dispatch((dispatch) => {
      dispatch(updateInformation(data));
    });

    close();
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='username' className='block font-semibold mb-2'>
            Username
          </label>
          <input
            type='text'
            id='username'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your username'
            {...register('username')}
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
            {...register('first_name')}
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
            {...register('last_name')}
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
            {...register('password')}
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
