import React from 'react';
import { useSelector } from 'react-redux';

import Slider from 'react-slick';

import Slide from '../../components/utils/Slide';

import MoneyDisplay from '../../components/MoneyDisplay/MoneyDisplay';

const UserHomePage = () => {
  const students = useSelector((state) => state.teacher.students);

  const settings = {
    infinite: true,
    speed: 650,
    slidesToShow: students.length > 9 ? 9 : students.length,
    slidesToScroll: 1,
    swipeToSlide: true,
    verticalSwiping: true,
    arrows: false,
    vertical: true,
  };

  const slides = students.map((student, index) => {
    // if (student.unpaid) {
    //   className += ` bg-red-200`;
    // }

    return (
      <Slide key={index} status={student.unpaid ? 'red' : 'green'}>
        <div className='h-16'>
          <h3 className='text-lg font-semibold'>
            {student.first_name} {student.last_name}
          </h3>
          <p className='mb-2'>{student.school}</p>
          {student.unpaid && (
            <span className='text-red-500'>Balance overdue</span>
          )}
          {!student.unpaid && (
            <span className='text-green-500'>Balance paid</span>
          )}
        </div>
      </Slide>
    );
  });

  return (
    <div
      className='grid grid-cols-3 gap-20 my-20 w-11/12 mx-auto'
      style={{ minHeight: '32rem' }}>
      {/* Money earned and owed */}
      <MoneyDisplay />
      {/* A scroll list of students */}
      <div
        className='rounded-lg shadow-lg overflow-hidden px-4 border-2 border-gray-400'
        style={{ maxHeight: '76.75vh' }}>
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
};

export default UserHomePage;
