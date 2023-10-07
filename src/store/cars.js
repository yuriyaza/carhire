import { createSlice } from '@reduxjs/toolkit';

export const cars = createSlice({
  name: 'cars',

  initialState: {
    selectedCar: null,
  },

  reducers: {
    setSelectedCar(state, action) {
      state.selectedCar = action.payload;
    },
  },
});
