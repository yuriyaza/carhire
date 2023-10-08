import { createSlice } from '@reduxjs/toolkit';

export const cars = createSlice({
  name: 'cars',

  initialState: {
    queryLimit: 8,
    queryPage: 1,
    selectedCar: null,
  },

  reducers: {
    setQueryLimit(state, action) {
      state.queryLimit = action.payload;
    },

    setQueryPage(state, action) {
      state.queryPage = action.payload;
    },

    setSelectedCar(state, action) {
      state.selectedCar = action.payload;
    },
  },
});
