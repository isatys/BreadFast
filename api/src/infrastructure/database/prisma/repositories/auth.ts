import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import { UserRegsitration } from '../../../../domain/entities/user';

module.exports = class {
	register(user: UserRegsitration) {
		return new Promise((resolve, reject) => {
			const userRegister = prisma.user.create({
				data: {
					email: user.email,
					lastname: user.lastname,
					firstname: user.firstname,
					password: user.password,
					company: user.company,
					company_logo: user.company_logo,
					phone: user.phone,
					phone_secondary: user.phone_secondary,
					type: user.type
				},
			});

			resolve(userRegister);
		});
	}

	addCompanyLogo(companyLogo:string, id:number) {
		return new Promise((resolve, reject) => {
			const addCompanyLogoUser = prisma.user.update({
				where: {
					id: id
				},
				data: {
					company_logo: companyLogo
				}
			});

			resolve(addCompanyLogoUser);
		});
	}
};
