import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import {
  updateInformation,
  updateStudents,
} from '../../../store/slice/teacherSlice';

const LoginForm = ({ close }) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (formData) => {
    const { username, password } = formData;
    const response = await fetch('/api/teachers/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    const students = await getStudents(data.id);

    dispatch((dispatch) => {
      dispatch(updateInformation(data));
    });

    dispatch((dispatch) => {
      dispatch(updateStudents(students));
    });

    close();
  };

  const getStudents = async (teacher_id) => {
    const response = await fetch(`/api/students/${teacher_id}`);
    const data = await response.json();
    return data;
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Login</h2>
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
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
