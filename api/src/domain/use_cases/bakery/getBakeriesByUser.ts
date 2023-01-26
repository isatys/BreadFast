// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';

const getBakeriesByUser = (BakeryRepository: any) => {
	async function execute(userId: number) {
		return await BakeryRepository.getBakeriesByUser(userId);
	}

	return {
		execute,
	};
};

module.exports = {
	getBakeriesByUser,
};
