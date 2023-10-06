import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';

import { updateStudent } from '../../../store/slice/teacherSlice';

const UpdateStudentForm = ({ student, close, index }) => {
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
    const response = await fetch(`/api/students/${student.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data }),
    });
    const updatedStudent = await response.json();
   
    dispatch((dispatch) => {
      dispatch(updateStudent({ index, updatedStudent }));
    });

    close();
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>
        Update {student.first_name}'s Information
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='school' className='block font-semibold mb-2'>
            School
          </label>
          <select
            id='school'
            className='w-full p-2 border border-gray-300 rounded'
            defaultValue={'Select School'}
            {...register('school_id')}>
            <option disabled>Select School</option>
            {options}
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor='lesson_status' className='block font-semibold mb-2'>
            Lesson Status
          </label>
          <select
            id='lesson_status'
            className='w-full p-2 border border-gray-300 rounded'
            defaultValue={'Select School'}
            {...register('lesson_status')}>
            <option value='current'>current</option>
            <option value='interested'>interested</option>
            <option value='former'>former</option>
          </select>
        </div>
        <div className='mb-4'>
          <label htmlFor='payment_method' className='block font-semibold mb-2'>
            Payment Method
          </label>
          <select
            id='payment_method'
            className='w-full p-2 border border-gray-300 rounded'
            defaultValue={'Select School'}
            {...register('payment_method')}>
            <option value='cash'>Cash</option>
            <option value='venmo'>Venmo</option>
            <option value='zelle'>Zelle</option>
          </select>
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
        <div className='flex justify-center'>
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateStudentForm;
