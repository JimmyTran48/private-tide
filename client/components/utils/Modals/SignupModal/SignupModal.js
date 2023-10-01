import React, { useState } from 'react';
import { Modal } from '@mui/material';

import SignupForm from '../../../forms/SignupForm/SignupForm';

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
        <SignupForm />
      </div>
    </Modal>
  );
};

export default SignupModal;
