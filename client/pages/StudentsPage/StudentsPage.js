import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Button } from '@mui/material';
import StudentsModal from '../../components/utils/Modals/StudentsModal/StudentsModal';

const StudentsPage = () => {
  const students = useSelector((state) => state.teacher.students);

  const [showForm, setShowForm] = useState(false);

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

  return (
    <React.Fragment>
      {showForm && (
        <StudentsModal
          close={() => {
            setShowForm(false);
          }}
        />
      )}
      <div className='w-11/12 mx-auto my-48 p-5 border border-blue-600 rounded-lg bg-blue-100 shadow-lg'>
        <Slider {...settings} className=''>
          {students.map((student, index) => (
            <div
              key={index}
              className='p-4 rounded-lg shadow-md text-center my-0.5 h-32 bg-gray-100'>
              <h3 className='text-xl font-semibold mb-2'>
                {student.first_name} {student.last_name}
              </h3>
            </div>
          ))}
        </Slider>
        <Button
          variant='contained'
          style={{ marginTop: '1rem', marginLeft: '4rem' }}
          className='bg-blue-600 hover:bg-blue-700 text-white'
          onClick={() => {
            setShowForm(true);
          }}>
          New Student
        </Button>
      </div>
    </React.Fragment>
  );
};

export default StudentsPage;
