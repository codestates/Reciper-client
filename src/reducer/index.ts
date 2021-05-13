import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { profileInfoSlice } from './profile';

const reducer = combineReducers({ profileInfoSlice: profileInfoSlice.reducer });

export default configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});
