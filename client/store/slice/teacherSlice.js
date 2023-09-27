import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  information: {
    id: null,
    first_name: null,
    last_name: null,
  },
  schools: [],
  students: [],
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
