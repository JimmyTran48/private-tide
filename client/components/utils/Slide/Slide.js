import React from 'react';

const Slide = ({ children, image }) => {
  return (
    <div>
      <h3 className='text-center text-lg'>{children}</h3>
      <img {...image} />
    </div>
  );
};

export default Slide;
