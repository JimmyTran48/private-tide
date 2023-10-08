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
    getStudents: (state, action) => {
      const sorted = [...action.payload].sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      state.students = sorted;
    },
    addStudents: (state, action) => {
      const sorted = [...state.students, action.payload].sort((a, b) =>
        a.first_name.localeCompare(b.first_name)
      );
      state.students = sorted;
    },
    updateStudent: (state, action) => {
      state.students[action.payload.index] = action.payload.updatedStudent;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateInformation,
  updateSchools,
  getStudents,
  addStudents,
  updateStudent,
} = teacherSlice.actions;

export default teacherSlice.reducer;
