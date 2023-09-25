import React, { useState } from 'react';
import Slider from 'react-slick';

import studentsArray from '../../data/students';
import { Button } from '@mui/material';

const StudentsPage = () => {
  const [students] = useState(studentsArray);

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

  const divClass = 'p-4 rounded-lg shadow-md text-center my-0.5 h-32';
  const h3Class = 'text-xl font-semibold mb-2';

  return (
    <div className='w-screen' style={{ height: '85vh' }}>
      <div className='w-11/12 mx-auto  pt-48'>
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
          style={{ marginTop: '1rem', marginLeft: '4rem' }}>
          New Student
        </Button>
      </div>
    </div>
  );
};

export default StudentsPage;
