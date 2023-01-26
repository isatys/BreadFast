import { UserRegister } from '../../entities/user';

import {
	InvalidParamError,
	MissingParamError,
	TestError,
	GenericError,
} from '../../../utils/genericErrors';

const registerUser = (
	AuthRepository: any,
	ValidateUserEmailRepository: any,
	UserRepository: any,
	BcryptService: any,
	UuidService: any,
	MailService: any
) => {
	async function execute(user: UserRegister) {
		if (
			user.firstname.length === 0 ||
			user.lastname.length === 0 ||
			user.email.length === 0 ||
			user.password.length === 0 ||
			user.repeatPassword.length === 0 ||
			user.phone.length === 0
		) {
			throw new MissingParamError(
				'Prénom ou Nom ou Email ou mot de passe manquant.'
			);
		}

		const emailTrim = user.email.toLowerCase().trim();
		const userExist = await UserRepository.getUser(emailTrim);

		if (userExist) {
			throw new InvalidParamError(
				'Un compte existe déjà avec cet email.'
			);
		}

		const passwordTrim = await BcryptService.hash(user.password);

		user.password = passwordTrim;
		user.firstname = user.firstname.toLowerCase().trim();
		user.lastname = user.lastname.toLowerCase().trim();

		const authUser = await AuthRepository.register(user);

		const uuid = await UuidService.generate();
		await ValidateUserEmailRepository.createValidation(authUser.id, uuid);

		MailService.send([authUser], uuid, 'validate-email');
		// const admins = await UserRepository.getAdmins();
		// if (admins && admins.length > 0) {
		// 	MailService.send([user], authUser, 'register');
		// }

		return authUser;
	}

	return {
		execute,
	};
};

module.exports = {
	registerUser,
};
