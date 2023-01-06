// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';

const getUser = (UserRepository: any) => {
	async function execute(email: string) {
		return await UserRepository.getUser(email);
	}

	return {
		execute,
	};
};

module.exports = {
	getUser,
};
