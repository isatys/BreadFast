/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
import { createAxiosInstance } from '../utils/axiosInstance';

export class UserRepository {
	getUser(userid: number) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: `/user/${userid}`,
				method: 'get',
			};
			const adisseoApiInstance = createAxiosInstance();

			return adisseoApiInstance(requestOptions)
				.then((result: any) => {
					resolve(result.data);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}
	getUsers() {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/users',
				method: 'get',
			};
			const bacoApiInstance = createAxiosInstance();

			return bacoApiInstance(requestOptions)
				.then((result: any) => {
					resolve(result.data);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}
	updateUserStatus(userid: number, status: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/update/status',
				method: 'post',
				data: {
					userid,
					status,
				},
			};
			const adisseoApiInstance = createAxiosInstance();

			return adisseoApiInstance(requestOptions)
				.then((result: any) => {
					resolve(result.data);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}
	deleteUser(userid: number) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/delete',
				method: 'post',
				data: {
					userid,
				},
			};
			const bacoApiInstance = createAxiosInstance();

			return bacoApiInstance(requestOptions)
				.then((result: any) => {
					resolve(result.data);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}
}
export default UserRepository;
