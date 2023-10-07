import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { cars } from './cars';
import { gui } from './gui';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cars: cars.reducer,
    gui: gui.reducer,
  },

  middleware: getDefaultMiddleware => [...getDefaultMiddleware(), api.middleware],
});
