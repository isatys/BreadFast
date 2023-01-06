import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';

import { reducers } from '../../application/reducers';

export const createReduxStore = (initialState: object) => {

	const store = createStore(
		reducers,
		initialState,
		process.env.NODE_ENV === 'production' ? applyMiddleware(ReduxThunk) : applyMiddleware(ReduxThunk, createLogger())
	);

	return store;
};

export default createReduxStore;
