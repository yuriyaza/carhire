import { configureStore } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { persistedCars } from './cars';
import { gui } from './gui';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    cars: persistedCars,
    gui: gui.reducer,
  },

  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    api.middleware,
  ],
});

export const persistor = persistStore(store);
