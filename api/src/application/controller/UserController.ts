import { exit } from 'process';

const getUsersUseCase = require('../../domain/use_cases/user/getUsers');
const getUserUseCase = require('../../domain/use_cases/user/getUser');
const getUserByIdUseCase = require('../../domain/use_cases/user/getUserById');
const updateUserStatusUseCase = require('../../domain/use_cases/admin/updateUserStatus');
const deleteUserUseCase = require('../../domain/use_cases/admin/deleteUser');

const userController = (dependencies: any) => {
	const {
		authRepository,
		bcryptService,
		userRepository,
		mailService,
		sessionService,
	} = dependencies;

	const getUsers = (req: any, res: any, next: any) => {
		const getUsersCommand = getUsersUseCase.getUsers(userRepository);
		getUsersCommand.execute().then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	// const getUser = (req: any, res: any, next: any) => {
	// 	const { email } = req.query;
	// 	const getUserCommand = getUserUseCase.getUser(userRepository);
	// 	getUserCommand.execute(email).then(
	// 		(response: any) => {
	// 			res.status(200).json(response);
	// 		},
	// 		(err: any) => {
	// 			next(err);
	// 		}
	// 	);
	// };
	const getUserById = (req: any, res: any, next: any) => {
		const { userid } = req.params;
		const getUserByIdCommand =
			getUserByIdUseCase.getUserById(userRepository);
		getUserByIdCommand.execute(Number(userid)).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				console.log(err);
				next(err);
			}
		);
	};
	const updateUserStatus = (req: any, res: any, next: any) => {
		const userid: number = req.body.userid;
		const status: string = req.body.status;

		const updateUserStatusCommand =
			updateUserStatusUseCase.updateUserStatus(
				userRepository,
				mailService
			);
		updateUserStatusCommand.execute(userid, status).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const deleteUser = (req: any, res: any, next: any) => {
		const userid: number = req.body.userid;
		const deleteUserCommand = deleteUserUseCase.deleteUser(userRepository);
		deleteUserCommand.execute(userid).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};

	return {
		getUsers,
		// getUser,
		updateUserStatus,
		getUserById,
		deleteUser,
	};
};

module.exports = {
	userController,
};
