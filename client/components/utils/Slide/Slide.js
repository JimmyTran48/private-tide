import React from 'react';

const Slide = ({ children, image, status }) => {
  let className = 'p-4 rounded-lg shadow-md text-center my-0.5 ';

  if (status === 'green') className += 'bg-green-200';
  if (status === 'red') className += 'bg-red-200';

  return (
    <div className={className}>
      <h3 className='text-xl font-semibold mb-2'>{children}</h3>
      <img {...image} className='mx-auto rounded-full mb-4' />
    </div>
  );
};

export default Slide;
