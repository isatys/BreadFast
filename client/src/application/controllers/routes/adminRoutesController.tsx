import * as React from 'react';
import loadable from '@loadable/component';
import { useRoutes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
/* istanbul ignore next */
const AdminController = loadable(
	() => import(/* webpackPrefetch: true */ '../admin/adminController')
);
const ManageUserController = loadable(
	() => import(/* webpackPrefetch: true */ '../admin/manageUserController')
);
export const routes = [
	{
		path: '/',
		element: <AdminController />,
		redirect: false,
	},
	{
		path: '/user/:userid',
		element: <ManageUserController />,
		redirect: false,
	},
];

export default function adminRoutesController() {
	/* istanbul ignore next */
	const { user } = useSelector(({ authReducer }) => {
		return authReducer;
	});
	/* istanbul ignore next */
	if (!user || user.role !== 'ADMIN') {
		return <Navigate to="/" replace />;
	}

	/* istanbul ignore next: Not unit testable, useRoutes cannot be stubbed */
	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useRoutes(routes);
}
