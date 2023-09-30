import React, { useState } from 'react';
import { Modal } from '@mui/material';

const SignupModal = ({ close }) => {
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
        <h2>Signup</h2>
        <p>Signup form goes here</p>
      </div>
    </Modal>
  );
};

export default SignupModal;
