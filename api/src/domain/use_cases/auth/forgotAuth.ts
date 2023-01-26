import User from '../../entities/user';

import {
	InvalidParamError,
	MissingParamError,
	AccessDeniedError,
} from '../../../utils/genericErrors';

const forgotPassword = (
	UserRepository: any,
	MailService: any,
	BcryptService: any
) => {
	async function execute(email: string) {
		if (email.length === 0) {
			throw new MissingParamError('Email manquant.');
		}
		const emailTrim: string = email.toLowerCase().trim();
		const user: User = await UserRepository.getUser(emailTrim);

		if (!user) {
			throw new InvalidParamError(
				"Aucun utilisateur n'est inscrit avec ce mail."
			);
		}

		const password: string = await BcryptService.generate();

		const pwdHash: string = await BcryptService.hash(password);
		await UserRepository.updateUserPassword(user.id, pwdHash);

		return MailService.send([user], password, 'forgot-password');
	}

	return {
		execute,
	};
};

module.exports = {
	forgotPassword,
};
