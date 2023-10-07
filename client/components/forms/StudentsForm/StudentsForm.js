import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { addStudents } from '../../../store/slice/teacherSlice';

const StudentsForm = ({ close }) => {
  const teacher_id = useSelector((state) => state.teacher.information.id);
  const schools = useSelector((state) => state.teacher.schools);
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const options = schools.map((school) => {
    return (
      <option value={school.id} key={school.id}>
        {school.name}
      </option>
    );
  });

  const onSubmit = async (data) => {
    const response = await fetch('/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, teacher_id }),
    });

    const student = await response.json();

    dispatch((dispatch) => {
      dispatch(addStudents(student));
    });

    close();
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Registration</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='firstName' className='block font-semibold mb-2'>
            First Name
          </label>
          <input
            type='text'
            id='firstName'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your first name'
            {...register('first_name', {
              required: true,
            })}
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
            {...register('last_name', {
              required: true,
            })}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='school' className='block font-semibold mb-2'>
            School
          </label>
          <select
            id='school'
            className='w-full p-2 border border-gray-300 rounded'
            defaultValue={'Select School'}
            {...register('school_id', {
              required: true,
              validate: (value) => value !== 'Select School',
            })}>
            <option disabled>Select School</option>
            {options}
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor='instrument' className='block font-semibold mb-2'>
            Instrument
          </label>
          <input
            type='text'
            id='instrument'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your instrument'
            {...register('instrument', {
              required: true,
            })}
          />
        </div>
        <div className='mb-4'>
          <label htmlFor='email' className='block font-semibold mb-2'>
            Email
          </label>
          <input
            type='email'
            id='email'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your email'
            {...register('email')}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='phoneNumber' className='block font-semibold mb-2'>
            Phone Number
          </label>
          <input
            type='tel'
            id='phoneNumber'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter your phone number'
            {...register('phone_number')}
          />
        </div>
        <button
          type='submit'
          className='w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700'>
          Register
        </button>
      </form>
    </div>
  );
};

export default StudentsForm;
