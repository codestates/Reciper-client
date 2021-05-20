import { profileEditInfoSlice } from './profileEdit';
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import { profileInfoSlice } from './profile';
import { recruitCreateSlice } from './recruitCreate';
import { recruitDetailSlice } from './recruitDetail';

const reducer = combineReducers({
	profileInfoSlice: profileInfoSlice.reducer,
	profileEditInfoSlice: profileEditInfoSlice.reducer,
	recruitCreateSlice: recruitCreateSlice.reducer,
	recruitDetailSlice: recruitDetailSlice.reducer,
});

export default configureStore({
	reducer,
	middleware: [...getDefaultMiddleware(), logger],
});
