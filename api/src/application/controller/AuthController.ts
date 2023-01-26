import { UserRegister } from '../../domain/entities/user';

const RegisterAuthUseCase = require('../../domain/use_cases/auth/registerAuth');
const LoginAuthUseCase = require('../../domain/use_cases/auth/loginAuth');
const forgotPasswordAuthUseCase = require('../../domain/use_cases/auth/forgotAuth');
const LogoutAuthUseCase = require('../../domain/use_cases/auth/logoutAuth');

const authController = (dependencies: any) => {
	const {
		authRepository,
		userRepository,
		validateUserEmailRepository,
		bcryptService,
		mailService,
		sessionService,
		uuidService,
	} = dependencies;

	const registerAuth = (req: any, res: any, next: any) => {
		const user: UserRegister = req.body;
		const RegisterCommand = RegisterAuthUseCase.registerUser(
			authRepository,
			validateUserEmailRepository,
			userRepository,
			bcryptService,
			uuidService,
			mailService
		);

		RegisterCommand.execute(user).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};

	const loginAuth = (req: any, res: any, next: any) => {
		const LoginCommand = LoginAuthUseCase.loginUser(
			bcryptService,
			userRepository,
			sessionService
		);
		const email: string = req.body.email;
		const password: string = req.body.password;
		LoginCommand.execute(email, password, req.session).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const forgotPasswordAuth = (req: any, res: any, next: any) => {
		const ForgotPasswordCommand = forgotPasswordAuthUseCase.forgotPassword(
			userRepository,
			mailService,
			bcryptService
		);
		const email: string = req.body.email;
		ForgotPasswordCommand.execute(email).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const logoutAuth = (req: any, res: any, next: any) => {
		const LogoutAuthCommand = LogoutAuthUseCase.logoutAuth();
		LogoutAuthCommand.execute(req.session).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};

	return {
		registerAuth,
		loginAuth,
		forgotPasswordAuth,
		logoutAuth,
	};
};

module.exports = {
	authController,
};
