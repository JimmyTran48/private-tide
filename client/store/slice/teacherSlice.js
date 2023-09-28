import { createSlice } from '@reduxjs/toolkit';

import schoolsData from '../../data/schools';
import studentsData from '../../data/students';

const initialState = {
  information: {
    id: null,
    first_name: null,
    last_name: null,
  },
  schools: schoolsData,
  students: studentsData,
};

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    updateInformation: (state, action) => {
      return (state.information = { ...state.information, ...action.payload });
    },
    updateSchools: (state, action) => {
      return state.schools.push(...action.payload);
    },
    getStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateInformation, updateSchools, getStudents } =
  teacherSlice.actions;

export default teacherSlice.reducer;
