import React, { useState } from 'react';

import StudentCount from '../../components/StudentCount';

import schoolsData from '../../data/schools';

const SchoolsPage = () => {
  const [schools] = useState(schoolsData);
  
  return (
    <div className='container mx-auto p-4'>
      <h2 className='text-2xl font-bold mb-4'>Schools</h2>
      <div className='grid grid-cols-2 gap-4'>
        {schools.map((school, index) => (
          <StudentCount key={index} schoolName={school.name} />
        ))}
      </div>
    </div>
  );
};

export default SchoolsPage;
