import React from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const LessonForm = ({ close, student_id }) => {
  const teacher_id = useSelector((state) => state.teacher.information.id);
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    await fetch('/api/lessons', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, teacher_id, student_id }),
    });

    close();
  };

  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Add Lesson</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-4'>
          <label htmlFor='lesson_date' className='block font-semibold mb-2'>
            Lesson Date
          </label>
          <input
            type='date'
            id='lesson_date'
            className='w-full p-2 border border-gray-300 rounded'
            {...register('lesson_date', { required: true })}
          />
        </div>
        <div className='mb-6'>
          <label htmlFor='price' className='block font-semibold mb-2'>
            Price
          </label>
          <input
            type='number'
            id='price'
            className='w-full p-2 border border-gray-300 rounded'
            {...register('price', { required: true })}
          />
        </div>
        <div className='text-center'>
          <button
            type='submit'
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'>
            Add Lesson
          </button>
        </div>
      </form>
    </div>
  );
};

export default LessonForm;
