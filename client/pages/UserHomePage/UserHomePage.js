import React, { useState } from 'react';
import Slider from 'react-slick';

import Slide from '../../components/utils/Slide';

import studentsArray from '../../data/students';
import MoneyDisplay from '../../components/MoneyDisplay/MoneyDisplay';

const UserHomePage = () => {
  const [students] = useState(studentsArray);

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

  const slides = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    let className = 'h-20 ';
    className += student.unpaid ? 'bg-red-300' : 'bg-purple-300';

    slides.push(
      <Slide>
        <div className={className}>
          <h3>
            {student.first_name} {student.last_name}
          </h3>
          <p>{student.school}</p>
          {student.unpaid && <span>Balance overdue</span>}
        </div>
      </Slide>
    );
  }

  return (
    <div
      className='grid grid-cols-3 gap-20 my-20 w-11/12 mx-auto'
      style={{ minHeight: '32rem' }}>
      {/* Money earned and owed */}
      <MoneyDisplay />
      {/* A scroll list of students */}
      <div
        className='bg-green-300 col-span-1 overflow-hidden'
        style={{ maxHeight: '76.75vh' }}>
        <Slider {...settings}>{slides}</Slider>
      </div>
    </div>
  );
};

export default UserHomePage;
