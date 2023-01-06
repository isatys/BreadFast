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

		if (user.deleted) {
			throw new AccessDeniedError(
				"L'administrateur a supprimé votre compte"
			);
		}

		const isPassword = await BcryptService.compare(user.password, password);

		if (isPassword === false) {
			throw new InvalidParamError('Mail ou mot de passe incorrect');
		}
		if (user.status === 'pending') {
			throw new AccessDeniedError(
				"Votre demande d'inscription est en cours de traitement. Vous pourrez accéder à l'application après validation de votre inscription par un administrateur. Vous serez prochainement notifié par mail."
			);
		} else if (user.status === 'refuse') {
			throw new AccessDeniedError(
				"L'administrateur ne vous a pas accepté"
			);
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
