import { combineReducers } from 'redux';
import authReducer from './authReducer';
import bakeryReducer from './bakeryReducer';
import userReducer from './userReducer';

export const reducers = combineReducers({
	authReducer,
	userReducer,
	bakeryReducer,
});

export default reducers;
