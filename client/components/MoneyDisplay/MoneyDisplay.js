import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import calculateBalance from '../../utils/calculateBalance';

const MoneyDisplay = () => {
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

  const [paid, owed] = calculateBalance(lessons);

  return (
    <div
      className='col-span-2 my-auto p-6 rounded-lg shadow-lg bg-white border-4 border-blue-600'
      style={{ height: '32rem' }}>
      <h1 className='text-center text-4xl mb-6 font-bold text-blue-600'>
        Lesson Balance
      </h1>
      <div className='text-center mb-4'>
        <h3 className='text-lg mb-2'>You've made:</h3>
        <h3 className='text-2xl font-bold text-green-600'>${paid}</h3>
      </div>
      {owed > 0 ? (
        <div className='text-center'>
          <h3 className='text-lg mb-2'>You're owed:</h3>
          <h3 className='text-2xl font-bold text-red-600'>${owed}</h3>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default MoneyDisplay;
