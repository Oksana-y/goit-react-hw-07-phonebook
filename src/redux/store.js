import { configureStore } from '@reduxjs/toolkit';
import { PhoneBookReducer } from './slice';

export const store = configureStore({
  reducer: PhoneBookReducer,
});
