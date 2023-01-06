import express from 'express';
const UserController = require('../controller/UserController');

const userRoutes = (dependencies: any) => {
	// eslint-disable-next-line new-cap
	const router = express.Router();

	const controller = UserController.userController(dependencies);

	// router.route('/').get(controller.getUser);
	router.route('/users').get(controller.getUsers);
	router.route('/update/status').post(controller.updateUserStatus);
	router.route('/:userid').get(controller.getUserById);
	router.route('/delete').post(controller.deleteUser);

	return router;
};

module.exports = {
	userRoutes,
};
