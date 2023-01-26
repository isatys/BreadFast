// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';

const updateUser = (UserRepository: any) => {
	async function execute(userId: number, data: Array<string>) {
		data.forEach((element, index) => {
			UserRepository.updateUser(userId, index, element);
		});
	}

	return {
		execute,
	};
};

module.exports = {
	updateUser,
};
