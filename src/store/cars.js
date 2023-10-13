import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const cars = createSlice({
    name: 'cars',

    initialState: {
        queryLimit: 8,
        queryPage: 1,

        allCars: [],
        favoriteCars: [],
        filteredCarsFromStore: [],
        selectedCar: {},

        brandFilter: null,
        priceFilter: null,
        mileageFromFilter: null,
        mileageToFilter: null,
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

        setAllCars(state, action) {
            state.allCars = action.payload;
        },

        removeFromFavorite(state, action) {
            state.favoriteCars = state.favoriteCars.filter(car => car.id !== action.payload.id);
        },

        setFilteredCarsFromStore(state, action) {
            state.filteredCarsFromStore = action.payload;
        },

        setBrandFilter(state, action) {
            state.brandFilter = action.payload;
        },

        setPriceFilter(state, action) {
            state.priceFilter = action.payload;
        },

        setMileageFromFilter(state, action) {
            state.mileageFromFilter = action.payload;
        },

        setMileageToFilter(state, action) {
            state.mileageToFilter = action.payload;
        },
    },
});

const persistConfig = {
    key: 'carhire',
    storage,
    whitelist: ['favoriteCars', 'brandFilter', 'priceFilter', 'mileageFromFilter', 'mileageToFilter'],
};

export const persistedCars = persistReducer(persistConfig, cars.reducer);
