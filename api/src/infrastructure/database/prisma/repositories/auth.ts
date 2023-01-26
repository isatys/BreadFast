import { prisma } from '../../../../utils/db';

import { UserRegister } from '../../../../domain/entities/user';

module.exports = class {
	register(user: UserRegister) {
		return new Promise((resolve, reject) => {
			const userRegister = prisma.user.create({
				data: {
					email: user.email,
					lastname: user.lastname,
					firstname: user.firstname,
					password: user.password,
					phone: user.phone,
				},
			});
			resolve(userRegister);
		});
	}
};
