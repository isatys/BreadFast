const CreateUseCase = require('../../domain/use_cases/bakery/create');
const GetBakeriesByUserUseCase = require('../../domain/use_cases/bakery/getBakeriesByUser');

const bakeryController = (dependencies: any) => {
	const { bakeryRepository } = dependencies;

	const create = (req: any, res: any, next: any) => {
		const { userId, bakery } = req.body;
		const CreateCommand = CreateUseCase.create(bakeryRepository);
		CreateCommand.execute(userId, bakery).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};
	const getBakeriesByUser = (req: any, res: any, next: any) => {
		const { userId } = req.params;
		const GetCommand =
			GetBakeriesByUserUseCase.getBakeriesByUser(bakeryRepository);
		GetCommand.execute(userId).then(
			(response: any) => {
				res.status(200).json(response);
			},
			(err: any) => {
				next(err);
			}
		);
	};

	return {
		create,
		getBakeriesByUser,
	};
};

module.exports = {
	bakeryController,
};
