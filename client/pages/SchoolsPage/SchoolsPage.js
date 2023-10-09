import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SchoolsModal from '../../components/utils/Modals/SchoolsModal';
import StudentCount from '../../components/StudentCount';

const SchoolsPage = () => {
  const schools = useSelector((state) => state.teacher.schools);
  const [showForm, setShowForm] = useState(false);

  return (
    <React.Fragment>
      {showForm && (
        <SchoolsModal
          close={() => {
            setShowForm(false);
          }}
        />
      )}
      <div className='container mx-auto p-4'>
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold'>Schools</h2>
          <button
            className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded'
            onClick={() => {
              setShowForm(true);
            }}>
            Add New School
          </button>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          {schools.map((school, index) => (
            <StudentCount key={index} schoolName={school.name} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SchoolsPage;
