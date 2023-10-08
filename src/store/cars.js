import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const cars = createSlice({
  name: 'cars',

  initialState: {
    queryLimit: 8,
    queryPage: 1,
    selectedCar: null,
    favoriteCars: [],
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

    addToFavorite(state, action) {
      state.favoriteCars.push(action.payload);
    },

    removeFromFavorite(state, action) {
      state.favoriteCars = state.favoriteCars.filter(car => car.id !== action.payload.id);
    },
  },
});

const persistConfig = {
  key: 'carhire',
  storage,
  whitelist: ['favoriteCars'],
};

export const persistedCars = persistReducer(persistConfig, cars.reducer);
