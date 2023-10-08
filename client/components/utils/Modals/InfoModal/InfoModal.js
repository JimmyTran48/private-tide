import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { Modal } from '@mui/material';

import LessonDisplay from '../../../LessonDisplay';
import StudentInfo from '../../../StudentInfo';
import UpdateStudentForm from '../../../forms/UpdateStudentForm';

const InfoModal = ({ close, index }) => {
  const [open, setOpen] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [showLessons, setShowLessons] = useState(false);

  const student = useSelector((state) => state.teacher.students)[index];

  const display = showForm ? (
    <UpdateStudentForm
      close={() => {
        setShowForm(!showForm);
        setShowLessons(false);
      }}
      student={student}
      index={index}
    />
  ) : showLessons ? (
    <LessonDisplay student={student} />
  ) : (
    <StudentInfo {...student} />
  );

  const editButtonLabel = showForm ? 'Student Info' : 'Edit Student';
  const lessonsButtonLabel = showLessons ? 'Student Info' : 'Show Lessons';

  const handleEditButtonClick = () => {
    setShowForm(!showForm);
    setShowLessons(false);
  };

  const handleLessonsButtonClick = () => {
    setShowLessons(!showLessons);
    setShowForm(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
        close();
      }}
      className='flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-lg'>
        {display}
        <div className='flex justify-end mt-4'>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 mr-2 rounded'
            onClick={handleEditButtonClick}>
            {editButtonLabel}
          </button>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'
            onClick={handleLessonsButtonClick}>
            {lessonsButtonLabel}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default InfoModal;
