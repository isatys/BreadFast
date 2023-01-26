const getUsersUseCase = require('../../domain/use_cases/user/getUsers');
const getUserUseCase = require('../../domain/use_cases/user/getUser');
const getUserByIdUseCase = require('../../domain/use_cases/user/getUserById');
const deleteUserUseCase = require('../../domain/use_cases/admin/deleteUser');
const validateUserEmailUseCase = require('../../domain/use_cases/validateUserEmail/validateUserEmail');
const sendValidateUserEmailUseCase = require('../../domain/use_cases/validateUserEmail/validateSendEmail');
const UpdateUserUseCase = require('../../domain/use_cases/user/updateUser');

const userController = (dependencies: any) => {
	const {
		authRepository,
		bcryptService,
		userRepository,
		mailService,
		sessionService,
		validateUserEmailRepository,
		uuidService,
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
	const validateUserEmail = (req: any, res: any, next: any) => {
		const userid: number = req.body.userid;
		const uuid: string = req.body.uuid;
		const validateUserEmailCommand =
			validateUserEmailUseCase.validateUserEmail(
				validateUserEmailRepository,
				userRepository
			);
		validateUserEmailCommand.execute(userid, uuid).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const sendValidateEmail = (req: any, res: any, next: any) => {
		const email: string = req.body.email;
		const validateUserEmailCommand =
			sendValidateUserEmailUseCase.sendValidateEmail(
				validateUserEmailRepository,
				userRepository,
				mailService,
				uuidService
			);
		validateUserEmailCommand.execute(email).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const updateUser = (req: any, res: any, next: any) => {
		const { userid, data } = req.body;
		const UpdateUserCommand = UpdateUserUseCase.updateUser(userRepository);
		UpdateUserCommand.execute(userid, data).then(
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
		getUserById,
		deleteUser,
		validateUserEmail,
		sendValidateEmail,
		updateUser,
	};
};

module.exports = {
	userController,
};
