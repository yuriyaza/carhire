import { createSlice } from '@reduxjs/toolkit';

export const gui = createSlice({
  name: 'gui',

  initialState: {
    isModalOpen: false,
  },

  reducers: {
    setModalOpen(state, action) {
      state.isModalOpen = action.payload;
    },
  },
});
