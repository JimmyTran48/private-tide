import React, { useState } from 'react';

import studentsData from '../../data/students';

const StudentCount = ({ schoolName }) => {
  const [students] = useState(studentsData);

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
