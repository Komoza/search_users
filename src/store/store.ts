import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reduser';

const store = configureStore({ reducer: appReducer });

export default store;
