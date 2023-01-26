import {
	InvalidParamError,
	MissingParamError,
} from '../../../utils/genericErrors';

const sendValidateEmail = (
	ValidateUserEmailRepository: any,
	UserRepository: any,
	MailService: any,
	UuidService: any
) => {
	async function execute(email: string) {
		const uuid = await UuidService.generate();
		const user = await UserRepository.getUser(email);
		await ValidateUserEmailRepository.createValidation(user.id, uuid);

		MailService.send([user], uuid, 'validate-email');
	}

	return {
		execute,
	};
};

module.exports = {
	sendValidateEmail,
};
