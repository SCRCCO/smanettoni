// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './index'; // Importa il tuo rootReducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
