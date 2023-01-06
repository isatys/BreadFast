import '../assets/scss/index.scss';

import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createReduxStore } from '../../infrastructure/utils/createReduxStore';
import LayoutController from './layoutController';

export function AppController() {
	const store = createReduxStore((window as any).__PRELOADED_STATE__);

	return (
		<Provider store={store}>
			<BrowserRouter>
				<LayoutController />
			</BrowserRouter>
		</Provider>
	);
}
export default AppController;
