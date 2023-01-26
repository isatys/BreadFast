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
			const _apiInstance = createAxiosInstance();

			return _apiInstance(requestOptions)
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
			const _apiInstance = createAxiosInstance();

			return _apiInstance(requestOptions)
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
			const _apiInstance = createAxiosInstance();

			return _apiInstance(requestOptions)
				.then((result: any) => {
					resolve(result.data);
				})
				.catch((error: any) => {
					reject(error);
				});
		});
	}
	updateUser(userid: number, data: Array<string>) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/update',
				method: 'post',
				data: {
					userid,
					data,
				},
			};
			const _apiInstance = createAxiosInstance();

			return _apiInstance(requestOptions)
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
			const _apiInstance = createAxiosInstance();

			return _apiInstance(requestOptions)
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
