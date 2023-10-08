import React, { useState } from 'react';
import { Modal } from '@mui/material';

import LessonForm from '../../../forms/LessonForm';

const LessonModal = ({ close, student_id }) => {
  const [open, setOpen] = useState(true);

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        close();
      }}
      className='flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-lg'>
        <LessonForm close={close} student_id={student_id} />
      </div>
    </Modal>
  );
};

export default LessonModal;
