import { prisma } from '../../../../utils/db';
module.exports = class {
	getUser(email: string) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.findUnique({
				where: {
					email: email,
				},
			});
			resolve(user);
		});
	}
	getUserById(id: number) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.findUnique({
				where: {
					id: id,
				},
			});
			resolve(user);
		});
	}
	updateUserPassword(userId: number, pwd: string) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.update({
				where: {
					id: userId,
				},
				data: {
					password: pwd,
				},
			});
			resolve(user);
		});
	}
	deleteUser(userId: number) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.update({
				where: {
					id: userId,
				},
				data: {
					isDeleted: true,
				},
			});
			resolve(user);
		});
	}
	// getAdmins() {
	// 	return new Promise((resolve, reject) => {
	// 		const admins = prisma.user.findMany({
	// 			where: {
	// 				role: 'ADMIN',
	// 			},
	// 			select: {
	// 				email: true,
	// 			},
	// 		});

	// 		resolve(admins);
	// 	});
	// }
	getUsers() {
		return new Promise((resolve, reject) => {
			const users = prisma.user.findMany({
				where: {
					isDeleted: false,
				},
			});

			resolve(users);
		});
	}
	updateUser(userId: number, column: string, value: string) {
		return new Promise((resolve, reject) => {
			const user = prisma.$queryRaw`UPDATE user
            SET ${column} = ${value}
            WHERE id == ${userId};`;
			resolve(user);
		});
	}
	isValidated(userId: number) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.update({
				where: {
					id: userId,
				},
				data: {
					isValidated: true,
				},
			});
			resolve(user);
		});
	}
};
