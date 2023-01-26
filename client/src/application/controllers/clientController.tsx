import * as React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { createReduxStore } from '../../infrastructure/utils/createReduxStore';
import LayoutController from './layoutController';

export function ClientController(props: any) {
	const { initialState, location } = props;
	const store = createReduxStore(initialState);

	return (
		<Provider store={store}>
			<StaticRouter location={location}>
				<LayoutController />
			</StaticRouter>
		</Provider>
	);
}

export default ClientController;
