// import {
// 	InvalidParamError,
// 	MissingParamError,
// } from '../../../utils/genericErrors';
import bakeryRegister from '../../entities/bakery';
const create = (BakeryRepository: any) => {
	async function execute(userId: number, bakery: bakeryRegister) {
		return await BakeryRepository.create(userId, bakery);
	}

	return {
		execute,
	};
};

module.exports = {
	create,
};
