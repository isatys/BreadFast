import * as React from 'react';
import loadable from '@loadable/component';
import { useRoutes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
/* istanbul ignore next */
const DashboardController = loadable(
	() => import(/* webpackPrefetch: true */ '../dashboard/dashboardController')
);
const UserController = loadable(
	() => import(/* webpackPrefetch: true */ '../user/userController')
);
const BakeryController = loadable(
	() => import(/* webpackPrefetch: true */ '../bakery/bakeryController')
);
export const routes = [
	{
		path: '/',
		element: <DashboardController />,
		redirect: false,
	},
	{
		path: '/profil',
		element: <UserController />,
		redirect: false,
	},
	{
		path: '/bakery/create',
		element: <BakeryController />,
		redirect: false,
	},
];

export default function authRoutesController() {
	/* istanbul ignore next */
	const { user } = useSelector(({ authReducer }) => {
		return authReducer;
	});
	/* istanbul ignore next */
	if (!user) {
		return <Navigate to="/" replace />;
	}

	/* istanbul ignore next: Not unit testable, useRoutes cannot be stubbed */
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useRoutes(routes);
}
