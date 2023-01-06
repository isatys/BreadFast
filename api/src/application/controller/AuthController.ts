const RegisterAuthUseCase = require('../../domain/use_cases/auth/registerAuth');
const LoginAuthUseCase = require('../../domain/use_cases/auth/loginAuth');
const forgotPasswordAuthUseCase = require('../../domain/use_cases/auth/forgotAuth');
const LogoutAuthUseCase = require('../../domain/use_cases/auth/logoutAuth');
import FileService from '../../infrastructure/services/file';

const authController = (dependencies: any) => {
	const {
		authRepository,
		bcryptService,
		userRepository,
		mailService,
		sessionService,
	} = dependencies;

	const registerAuth = (req: any, res: any, next: any) => {
		const RegisterCommand = RegisterAuthUseCase.registerUser(
			authRepository,
			bcryptService,
			userRepository,
			FileService,
			mailService
		);

		const user = {
			lastname: req.body.lastname,
			firstname: req.body.firstname,
			email: req.body.email,
			phone: req.body.phone,
			phone_secondary: req.body.phone_secondary,
			company: req.body.company,
			password: req.body.password,
			type:
				req.body.checkCertification === 'false'
					? 'animator'
					: 'conseil',
		};

		const files = req.files;
		const certifications = req.body.certifications
			? JSON.parse(req.body.certifications)
			: null;
		RegisterCommand.execute(user, files, certifications).then(
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
