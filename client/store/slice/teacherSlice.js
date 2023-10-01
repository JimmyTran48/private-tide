import { createSlice } from '@reduxjs/toolkit';

import studentsData from '../../data/students';

const initialState = {
  information: null,
  schools: [],
  students: studentsData,
};

export const teacherSlice = createSlice({
  name: 'teacher',
  initialState,
  reducers: {
    updateInformation: (state, action) => {
      state.information = action.payload;
    },
    updateSchools: (state, action) => {
      state.schools = action.payload;
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
