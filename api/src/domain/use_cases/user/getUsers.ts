// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';

const getUsers = (UserRepository: any) => {
	async function execute() {
		return await UserRepository.getUsers();
	}

	return {
		execute,
	};
};

module.exports = {
	getUsers,
};
