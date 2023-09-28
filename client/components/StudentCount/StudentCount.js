import React from 'react';
import { useSelector } from 'react-redux';

const StudentCount = ({ schoolName }) => {
  const students = useSelector((state) => state.teacher.students);

  const studentCount = students.filter(
    (student) => student.school === schoolName
  ).length;

  return (
    <div className='border p-4 my-4'>
      <h3 className='text-xl font-semibold mb-2'>{schoolName}</h3>
      <p>Students: {studentCount}</p>
    </div>
  );
};

export default StudentCount;
