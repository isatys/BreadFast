import express from 'express';

const BakeryController = require('../controller/BakeryController');

const bakeryRoutes = (dependencies: any) => {
	// eslint-disable-next-line new-cap
	const router = express.Router();

	const controller = BakeryController.bakeryController(dependencies);

	router.route('/create').post(controller.create);
	router.route('/get/:userId').get(controller.getBakeriesByUser);
	return router;
};

module.exports = {
	bakeryRoutes,
};
