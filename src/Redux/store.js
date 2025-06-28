import { configureStore } from '@reduxjs/toolkit';
import basketSlice from './sliceBusket';
import userSlice from './createUser'

export const store = configureStore({
  reducer: {
    basket: basketSlice,
    auth: userSlice
  },
});