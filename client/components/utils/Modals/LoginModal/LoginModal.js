import React, { useState } from 'react';
import { Modal } from '@mui/material';

import LoginForm from '../../../forms/LoginForm/LoginForm';

const LoginModal = ({ close }) => {
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
        <LoginForm
          close={() => {
            setOpen(false);
            close();
          }}
        />
      </div>
    </Modal>
  );
};

export default LoginModal;
