import React from 'react';

const StudentsForm = () => {
  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Registration</h2>
      <form>
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
        <div className='mb-4'>
          <label htmlFor='school' className='block font-semibold mb-2'>
            School
          </label>
          <select
            id='school'
            className='w-full p-2 border border-gray-300 rounded'>
            <option value='school1'>School 1</option>
            <option value='school2'>School 2</option>
            <option value='school3'>School 3</option>
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
