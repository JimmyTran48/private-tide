import React, { useState } from 'react';
import { Modal } from '@mui/material';

import SchoolsForm from '../../../forms/SchoolsForm';

const SchoolsModal = ({ close }) => {
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
        <SchoolsForm close={close} />
      </div>
    </Modal>
  );
};

export default SchoolsModal;
