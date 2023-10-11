import { createSlice } from '@reduxjs/toolkit';

export const gui = createSlice({
    name: 'gui',

    initialState: {
        isFilterOn: false,
        isModalOpen: false,
    },

    reducers: {
        setFilterOn(state, action) {
            state.isFilterOn = action.payload;
        },

        setModalOpen(state, action) {
            state.isModalOpen = action.payload;
        },
    },
});
