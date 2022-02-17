import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import logger from 'redux-logger';
import productsReducer from './products/products-reducer';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const productsPersistConfig = {
  key: 'products',
  storage,
  whitelist: ['userId']
};

export const store = configureStore({
  reducer: {
    products: persistReducer(productsPersistConfig, productsReducer),
  },
  middleware,
  devtools: process.env.NODE_ENV !== 'development',
});

export const persistor = persistStore(store);