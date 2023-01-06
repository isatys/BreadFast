import * as React from 'react';

import HeaderController from '../controllers/layout/headerController';
import ContentView from '../views/home/contentView';
import FooterController from '../controllers/layout/footerController';
import { RoutesController } from './routes/routesController';

export function LayoutController() {
	return (
		<React.Fragment>
			<HeaderController />
			<ContentView>
				<RoutesController />
			</ContentView>
			<FooterController />
		</React.Fragment>
	);
}
export default LayoutController;
