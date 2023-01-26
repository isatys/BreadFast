import User from '../../entities/user';

import {
	InvalidParamError,
	MissingParamError,
	AccessDeniedError,
} from '../../../utils/genericErrors';

const loginUser = (
	BcryptService: any,
	UserRepository: any,
	SessionService: any
) => {
	async function execute(email: string, password: string, session: any) {
		if (email.length === 0 || password.length === 0) {
			throw new MissingParamError('Email ou mot de passe manquant.');
		}
		const emailTrim = email.toLowerCase().trim();
		const user: User = await UserRepository.getUser(emailTrim);
		if (!user) {
			throw new InvalidParamError('Mail ou mot de passe incorrect.');
		}

		if (user.isDeleted) {
			throw new AccessDeniedError(
				"L'administrateur a supprimé votre compte"
			);
		}
		if (!user.isValidated) {
			throw new AccessDeniedError('Veuillez valider votre email.');
		}

		const isPassword = await BcryptService.compare(user.password, password);

		if (isPassword === false) {
			throw new InvalidParamError('Mail ou mot de passe incorrect');
		}

		delete user.password;
		await SessionService.save(session, user);
		return user;
	}

	return {
		execute,
	};
};

module.exports = {
	loginUser,
};
