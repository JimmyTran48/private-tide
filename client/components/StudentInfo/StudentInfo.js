import React from 'react';
import { Paper, Typography, Divider } from '@mui/material';

const StudentInfo = ({
  first_name,
  last_name,
  instrument,
  email,
  phone_number,
  lesson_status,
  payment_method,
  school,
}) => {
  return (
    <Paper className='p-4 rounded-lg shadow-md'>
      <Typography variant='h5' className='mb-2'>
        Student Information
      </Typography>
      <Divider className='mb-4' />
      <div className='mb-2'>
        <strong>First Name:</strong> {first_name}
      </div>
      <div className='mb-2'>
        <strong>Last Name:</strong> {last_name}
      </div>
      <div className='mb-2'>
        <strong>Instrument:</strong> {instrument}
      </div>
      <div className='mb-2'>
        <strong>Email:</strong> {email}
      </div>
      <div className='mb-2'>
        <strong>Phone Number:</strong> {phone_number}
      </div>
      <div className='mb-2'>
        <strong>Lesson Status:</strong> {lesson_status}
      </div>
      <div className='mb-2'>
        <strong>Payment Method:</strong> {payment_method}
      </div>
      <div>
        <strong>School:</strong> {school}
      </div>
    </Paper>
  );
};

export default StudentInfo;
