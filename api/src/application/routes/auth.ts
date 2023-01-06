import express from 'express';

const AuthController = require('../controller/AuthController');

const authRoutes = (dependencies: any) => {
	// eslint-disable-next-line new-cap
	const router = express.Router();

	const { multipartBodyService } = dependencies;

	const controller = AuthController.authController(dependencies);

	const fields = [
		{
			name: 'lastname',
		},
		{
			name: 'firstname',
		},
		{
			name: 'email',
		},
		{
			name: 'phone',
		},
		{
			name: 'phone_secondary',
		},
		{
			name: 'company',
		},
		{
			name: 'company_logo',
		},
		{
			name: 'certifications',
		},
		{
			name: 'password',
		},
	];

	router
		.route('/register')
		.post(
			multipartBodyService.handleMultipleFields(fields),
			controller.registerAuth
		);

	router.route('/login').post(controller.loginAuth);
	router.route('/forgot').post(controller.forgotPasswordAuth);
	router.route('/logout').post(controller.logoutAuth);

	return router;
};

module.exports = {
	authRoutes
};
