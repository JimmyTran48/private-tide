import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  information: null,
  schools: [],
  students: [],
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
    updateStudents: (state, action) => {
      state.students = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateInformation, updateSchools, updateStudents } =
  teacherSlice.actions;

export default teacherSlice.reducer;
