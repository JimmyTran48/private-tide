import React, { useState } from 'react';
import { Modal } from '@mui/material';

const DetailsModal = ({ close }) => {
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
        <h2>Teacher Details</h2>
        <p>Details goes here</p>
      </div>
    </Modal>
  );
};

export default DetailsModal;
