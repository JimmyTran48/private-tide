import { configureStore } from '@reduxjs/toolkit';

import teacherReducer from './slice/teacherSlice';

export const store = configureStore({
  reducer: { teacher: teacherReducer },
});
