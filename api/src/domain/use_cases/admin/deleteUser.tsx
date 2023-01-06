import {
	InvalidParamError,
	MissingParamError,
	AccessDeniedError,
} from '../../../utils/genericErrors';

const deleteUser = (UserRepository: any) => {
	async function execute(userid: number) {
		return await UserRepository.deleteUser(userid);
	}

	return {
		execute,
	};
};

module.exports = {
	deleteUser,
};
