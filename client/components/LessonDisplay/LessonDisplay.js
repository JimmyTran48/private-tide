import React, { useEffect, useState } from 'react';
import { Paper, Typography, Divider } from '@mui/material';

import StudentLesson from '../StudentLesson';

const LessonDisplay = ({ student }) => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const response = await fetch(`/api/lessons/${student.id}`);
      const data = await response.json();
      setLessons(data);
    };

    fetchLessons();
  }, [student.id]);

  const render = lessons.map((lesson, index) => {
    const isLastLesson = index === lessons.length - 1;
    return (
      <React.Fragment key={lesson.id}>
        <StudentLesson {...lesson} />
        {!isLastLesson && <Divider className='my-4' />}
      </React.Fragment>
    );
  });

  return (
    <Paper className='p-4 mb-4 rounded-lg shadow-md bg-white'>
      <Typography variant='h5' className='mb-2'>
        {student.first_name}'s Lesson Information
      </Typography>
      <Divider className='mb-4' />
      {lessons.length ? (
        render
      ) : (
        <Typography variant='body1'>
          {student.first_name} has no lessons.
        </Typography>
      )}
    </Paper>
  );
};

export default LessonDisplay;
