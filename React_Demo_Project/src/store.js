import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './Features/userSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
