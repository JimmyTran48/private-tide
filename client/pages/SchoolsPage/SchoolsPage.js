import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateSchools } from '../../store/slice/teacherSlice';

import StudentCount from '../../components/StudentCount';

const SchoolsPage = () => {
  const schools = useSelector((state) => state.teacher.schools);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData(dispatch) {
      const response = await fetch('/api/schools');
      const data = await response.json();
      dispatch(updateSchools(data));
    }
    dispatch(fetchData);
  }, []);

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
