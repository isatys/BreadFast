import {
	InvalidParamError,
	MissingParamError,
} from '../../../utils/genericErrors';

const validateUserEmail = (
	ValidateUserEmailRepository: any,
	UserRepository: any
) => {
	async function execute(uuid: string) {
		const userUuid = await ValidateUserEmailRepository.getUuid(uuid);
		const lastUuids = await ValidateUserEmailRepository.getLastUuids(
			userUuid.userId
		);
		if (lastUuids[0].uuid !== userUuid.uuid) {
			throw new InvalidParamError('Ce lien a expiré.');
		}

		await ValidateUserEmailRepository.validate(uuid);
		await UserRepository.isValidated(userUuid.userId);
	}

	return {
		execute,
	};
};

module.exports = {
	validateUserEmail,
};
