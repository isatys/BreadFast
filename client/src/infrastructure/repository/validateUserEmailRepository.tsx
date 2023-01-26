/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
import { createAxiosInstance } from '../utils/axiosInstance';

export class ValidateUserEmailRepository {
	validateUserEmail(userid: number, uuid: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/validate/email',
				method: 'post',
				data: {
					userid,
					uuid,
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
	sendValidateUserEmail(email: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/user/resend/validate/email',
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
}
export default ValidateUserEmailRepository;
