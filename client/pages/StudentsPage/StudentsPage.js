import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';

import { Button, IconButton } from '@mui/material';
import { InfoOutlined } from '@mui/icons-material';

import StudentsModal from '../../components/utils/Modals/StudentsModal';
import InfoModal from '../../components/utils/Modals/InfoModal';

const StudentsPage = () => {
  const students = useSelector((state) => state.teacher.students);
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

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
      {showInfo !== false ? (
        <InfoModal
          close={() => {
            setShowInfo(false);
          }}
          index={showInfo}
        />
      ) : (
        ''
      )}
      <div className='w-11/12 mx-auto my-48 p-5 border border-blue-600 rounded-lg bg-blue-100 shadow-lg'>
        <Slider {...settings} className=''>
          {students.map((student, index) => (
            <div
              key={index}
              className='p-4 rounded-lg shadow-md text-center my-0.5 h-24 bg-gray-100 relative'>
              <IconButton
                aria-label='information'
                color='primary'
                size='small'
                style={{
                  position: 'absolute',
                  top: '8px',
                  right: '8px',
                }}
                onClick={() => {
                  setShowInfo(index);
                }}>
                <InfoOutlined />
              </IconButton>
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
