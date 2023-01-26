import * as React from 'react';
import loadable from '@loadable/component';
import { useRoutes } from 'react-router-dom';

/* istanbul ignore next */
const HomeController = loadable(
	() => import(/* webpackPrefetch: true */ '../home/homeController')
);
/* istanbul ignore next */
const RegisterController = loadable(
	() => import(/* webpackPrefetch: true */ '../auth/registerController')
);
/* istanbul ignore next */
const LoginController = loadable(
	() => import(/* webpackPrefetch: true */ '../auth/loginController')
);
/* istanbul ignore next */
const ForgotController = loadable(
	() => import(/* webpackPrefetch: true */ '../auth/forgotController')
);
/* istanbul ignore next */
const ValidateUserEmailController = loadable(
	() =>
		import(
			/* webpackPrefetch: true */ '../auth/validateUserEmailController'
		)
);

/* istanbul ignore next */
const AuthRoutesController = loadable(
	() => import(/* webpackPrefetch: true */ './authRoutesController')
);
/* istanbul ignore next */
const AdminRoutesController = loadable(
	() => import(/* webpackPrefetch: true */ './adminRoutesController')
);
export const routes = [
	{
		path: '/',
		exact: true,
		element: <HomeController />,
		redirect: false,
	},
	{
		path: '/register',
		exact: true,
		element: <RegisterController />,
		redirect: false,
	},
	{
		path: '/login',
		exact: true,
		element: <LoginController />,
		redirect: false,
	},
	{
		path: '/forgot-password',
		exact: true,
		element: <ForgotController />,
		redirect: false,
	},
	{
		path: '/email/validate/:uuid',
		exact: false,
		element: <ValidateUserEmailController />,
		redirect: false,
	},
	{
		path: '/user/*',
		exact: false,
		element: <AuthRoutesController />,
		redirect: false,
	},
	{
		path: '/admin/*',
		exact: false,
		element: <AdminRoutesController />,
		redirect: false,
	},
];

export function RoutesController() {
	/* istanbul ignore next: Not unit testable, useRoutes cannot be stubbed */
	return useRoutes(routes);
}
