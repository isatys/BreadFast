import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

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
					deleted: true,
				},
			});
			resolve(user);
		});
	}
	getAdmins() {
		return new Promise((resolve, reject) => {
			const admins = prisma.user.findMany({
				where: {
					role: 'ADMIN',
				},
				select: {
					email: true,
				},
			});

			resolve(admins);
		});
	}
	getUsers() {
		return new Promise((resolve, reject) => {
			const users = prisma.user.findMany({
				where: {
					deleted: false,
				},
			});

			resolve(users);
		});
	}
	updateUserStatus(userId: number, status: string) {
		return new Promise((resolve, reject) => {
			const user = prisma.user.update({
				where: {
					id: userId,
				},
				data: {
					//fonctionne mais rale
					status: status,
				},
			});
			resolve(user);
		});
	}
};
