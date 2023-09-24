import React from 'react';

const SliderArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
      }}
      onClick={onClick}
    />
  );
};

export default SliderArrow;
