/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
import { createAxiosInstance } from '../utils/axiosInstance';
import { UserRegister } from '../../application/entities/user';

export class AuthRepository {
	register(user: UserRegister) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/register',
				method: 'post',
				data: user,
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
	login(email: string, password: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/login',
				method: 'post',
				data: {
					email,
					password,
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
	forgot(email: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/forgot',
				method: 'post',
				data: {
					email,
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
	logout() {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/logout',
				method: 'post',
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
export default AuthRepository;
