import React from 'react';

const SchoolsForm = ({ close }) => {
  return (
    <div className='w-72 mx-auto bg-white p-8 rounded-lg shadow-lg'>
      <h2 className='text-2xl font-bold mb-6 text-center'>Create New School</h2>
      <form>
        <div className='mb-4'>
          <label htmlFor='schoolName' className='block font-semibold mb-2'>
            School Name
          </label>
          <input
            type='text'
            id='schoolName'
            className='w-full p-2 border border-gray-300 rounded'
            placeholder='Enter school name'
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
