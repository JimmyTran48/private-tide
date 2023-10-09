import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { updateSchools } from '../../../store/slice/teacherSlice';

const SchoolsForm = ({ close }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch('/api/schools', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });
    const school = await response.json();
    
    dispatch((dispatch) => {
      dispatch(updateSchools(school));
    });
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Create New School</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='schoolName' className='block font-semibold mb-2'>
            School Name
          </label>
          <input
            type='text'
            id='schoolName'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter school name'
            {...register('name', { required: true })}
          />
        </div>
        <button
          type='submit'
          className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded w-full'>
          Create School
        </button>
      </form>
    </div>
  );
};

export default SchoolsForm;
