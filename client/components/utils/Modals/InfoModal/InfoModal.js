import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from '@mui/material';

import StudentInfo from '../../../StudentInfo/StudentInfo';

const InfoModal = ({ close, index }) => {
  const [open, setOpen] = useState(true);
  const student = useSelector((state) => state.teacher.students)[index];

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
