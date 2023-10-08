import React, { useState } from 'react';

import formatDate from '../../utils/formatDate';

const StudentLesson = ({ id, lesson_date, payment_status, price }) => {
  const [status, setStatus] = useState(payment_status);

  const date = formatDate(lesson_date);

  const handlePaidLesson = async () => {
    await fetch(`/api/lessons/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ payment_status: 'paid' }),
    });
    setStatus('paid');
  };

  return (
    <React.Fragment>
      <div className='mb-2'>
        <strong>Date:</strong> {date}
      </div>
      <div className='mb-2'>
        <strong>Payment Status:</strong> {status}
        {status !== 'paid' && (
          <button
            onClick={handlePaidLesson}
            className='ml-2 px-2 py-1 bg-green-500 text-white rounded'>
            Mark as Paid
          </button>
        )}
      </div>
      <div className='mb-2'>
        <strong>Price:</strong> {price}
      </div>
    </React.Fragment>
  );
};

export default StudentLesson;
