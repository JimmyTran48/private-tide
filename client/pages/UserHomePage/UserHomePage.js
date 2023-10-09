import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Slider from 'react-slick';

import Slide from '../../components/utils/Slide';

import MoneyDisplay from '../../components/MoneyDisplay/MoneyDisplay';

const UserHomePage = () => {
  const students = useSelector((state) => state.teacher.students);
  const teacher_id = useSelector((state) => state.teacher.information.id);

  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const getLessons = async () => {
      const response = await fetch(`/api/lessons/all/${teacher_id}`);
      const data = await response.json();

      setLessons(data);
    };

    getLessons();
  }, []);

  const unpaid = lessons.reduce((acc, curr) => {
    if (curr.payment_status !== 'paid') {
      const name = curr.first_name + ' ' + curr.last_name;
      acc[name] = true;
    }
    return acc;
  }, {});

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
    const name = student.first_name + ' ' + student.last_name;
    const className = unpaid[name] ? 'text-red-500' : 'text-green-500';
    const message = unpaid[name] ? 'Balance overdue' : 'Balance paid';

    return (
      <Slide key={index} status={unpaid[name] ? 'red' : 'green'}>
        <div className='h-16'>
          <h3 className='text-lg font-semibold'>
            {student.first_name} {student.last_name}
          </h3>
          <p className='mb-2'>{student.school}</p>

          <span className={className}>{message}</span>
        </div>
      </Slide>
    );
  });

  return (
    <div
      className='grid grid-cols-3 gap-20 my-20 w-11/12 mx-auto'
      style={{ minHeight: '32rem' }}>
      {/* Money earned and owed */}
      <MoneyDisplay lessons={lessons} />
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
