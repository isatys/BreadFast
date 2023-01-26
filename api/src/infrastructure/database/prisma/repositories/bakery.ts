import { prisma } from '../../../../utils/db';
import BakeryRegister from '../../../../domain/entities/bakery';

module.exports = class {
	create(userid: number, bakery: BakeryRegister) {
		return new Promise((resolve, reject) => {
			const _bakery = prisma.bakery.create({
				data: {
					name: bakery.name,
					address: bakery.address,
					city: bakery.city,
					country: bakery.country,
					userId: userid,
				},
			});
			resolve(_bakery);
		});
	}
	getBakeriesByUser(userId: number) {
		return new Promise((resolve, reject) => {
			const _bakeries = prisma.bakery.findMany({
				where: {
					userId: userId,
				},
			});
			resolve(_bakeries);
		});
	}
};
