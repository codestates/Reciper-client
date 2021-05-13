import { profileEditInfoSlice } from './profileEdit';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { profileInfoSlice } from './profile';

const reducer = combineReducers({
	profileInfoSlice: profileInfoSlice.reducer,
	profileEditInfoSlice: profileEditInfoSlice.reducer,
});

export default configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});
