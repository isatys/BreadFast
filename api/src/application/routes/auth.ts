import express from 'express';

const AuthController = require('../controller/AuthController');

const authRoutes = (dependencies: any) => {
	// eslint-disable-next-line new-cap
	const router = express.Router();

	const controller = AuthController.authController(dependencies);

	router.route('/register').post(controller.registerAuth);

	router.route('/login').post(controller.loginAuth);
	router.route('/forgot').post(controller.forgotPasswordAuth);
	router.route('/logout').post(controller.logoutAuth);

	return router;
};

module.exports = {
	authRoutes,
};
