import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='w-11/12 mx-auto my-48 p-5 border border-blue-600 rounded-lg'>
      <h2 className='text-2xl font-bold mb-4'>404 - Page Not Found</h2>
      <p className='text-lg'>
        The page you are looking for does not exist. Please check the URL or go
        back to the{' '}
        <Link to='/' className='text-blue-600'>
          homepage
        </Link>
        .
      </p>
    </div>
  );
};

export default NotFound;
