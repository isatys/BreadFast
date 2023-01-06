// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';

const getUserById = (UserRepository: any) => {
	async function execute(userid: number) {
		return await UserRepository.getUserById(userid);
	}

	return {
		execute,
	};
};

module.exports = {
	getUserById,
};
