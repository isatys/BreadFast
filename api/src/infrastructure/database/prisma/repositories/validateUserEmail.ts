import { prisma } from '../../../../utils/db';

module.exports = class {
	createValidation(userId: number, uuid: string) {
		return new Promise((resolve, reject) => {
			const userValidate = prisma.validateUserEmail.create({
				data: {
					uuid: uuid,
					userId: userId,
				},
			});
			resolve(userValidate);
		});
	}
	getUuid(uuid: string) {
		return new Promise((resolve, reject) => {
			const userValidate = prisma.validateUserEmail.findUnique({
				where: {
					uuid: uuid,
				},
			});
			resolve(userValidate);
		});
	}
	getLastUuids(userId: number) {
		return new Promise((resolve, reject) => {
			const lastUuid = prisma.validateUserEmail.findMany({
				take: 1,
				where: {
					userId: userId,
				},
				orderBy: {
					createdAt: 'desc',
				},
			});
			resolve(lastUuid);
		});
	}
	validate(uuid: string) {
		return new Promise((resolve, reject) => {
			const uuidValidation = prisma.validateUserEmail.update({
				where: {
					uuid: uuid,
				},
				data: {
					isValidated: true,
				},
			});
			resolve(uuidValidation);
		});
	}
};
