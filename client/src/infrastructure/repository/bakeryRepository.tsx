/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
import { createAxiosInstance } from '../utils/axiosInstance';
import { BakeryRegister } from '../../application/entities/bakery';

export class BakeryRepository {
	create(userId: number, bakery: BakeryRegister) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/bakery/create',
				method: 'post',
				data: { userId, bakery },
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
	getBakeriesByUser(userId: number) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: `/bakery/get/${userId}`,
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
}
export default BakeryRepository;
