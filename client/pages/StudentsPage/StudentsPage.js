import React from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Button } from '@mui/material';

const StudentsPage = () => {
  const students = useSelector((state) => state.teacher.students);

  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 1,
    speed: 500,
    rows: 3,
    slidesPerRow: 3,
    arrows: false,
  };

  const divClass =
    'p-4 rounded-lg shadow-md text-center my-0.5 h-32 bg-gray-100';
  const h3Class = 'text-xl font-semibold mb-2';

  return (
    <div className='w-11/12 mx-auto my-48 p-5 border border-blue-600 rounded-lg bg-blue-100 shadow-lg'>
      <Slider {...settings} className=''>
        {students.map((student, index) => (
          <div key={index} className={divClass}>
            <h3 className={h3Class}>
              {student.first_name} {student.last_name}
            </h3>
          </div>
        ))}
      </Slider>
      <Button
        variant='contained'
        style={{ marginTop: '1rem', marginLeft: '4rem' }}
        className='bg-blue-600 hover:bg-blue-700 text-white'>
        New Student
      </Button>
    </div>
  );
};

export default StudentsPage;
