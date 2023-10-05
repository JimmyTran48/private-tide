import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from '@mui/material';

import StudentInfo from '../../../StudentInfo';
import StudentLessons from '../../../StudentLessons';
import UpdateStudentForm from '../../../forms/UpdateStudentForm';

const InfoModal = ({ close, index }) => {
  const [open, setOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showLessons, setShowLessons] = useState(false);

  const student = useSelector((state) => state.teacher.students)[index];

  const display = showForm ? (
    <UpdateStudentForm />
  ) : showLessons ? (
    <StudentLessons />
  ) : (
    <StudentInfo {...student} />
  );

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        close();
      }}
      className='flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-lg'>
        <StudentInfo {...student} />
      </div>
    </Modal>
  );
};

export default InfoModal;
