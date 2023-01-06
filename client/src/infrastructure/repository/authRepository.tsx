/* eslint-disable no-promise-executor-return */
/* eslint-disable class-methods-use-this */
import { createAxiosInstance } from '../utils/axiosInstance';
import User from '../../application/entities/user';
import Certifications from '../../application/entities/certifications';

export class AuthRepository {
	register(
		user: User,
		certifications: Certifications,
		checkCertification: string
	) {
		return new Promise((resolve, reject) => {
			const formData = new FormData();

			if (certifications && certifications.length > 0) {
				formData.append(
					'certifications',
					JSON.stringify(certifications)
				);
				certifications.forEach((certification) => {
					if (certification.certification_doc) {
						formData.append(
							'certifications',
							certification.certification_doc
						);
					}
				});
			}

			formData.append('firstname', user.firstname);
			formData.append('lastname', user.lastname);
			formData.append('email', user.email);
			formData.append('phone', user.phone);
			formData.append('phone_secondary', user.phone_secondary);
			formData.append('company', user.company);
			formData.append('company_logo', user.company_logo);
			formData.append('password', user.password);
			formData.append('checkCertification', checkCertification);

			const requestOptions = {
				url: '/auth/register',
				method: 'post',
				data: formData,
			};

			const headers = { 'Content-Type': 'multipart/form-data' };

			const bacoApiInstance = createAxiosInstance(headers);

			return bacoApiInstance(requestOptions)
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
	forgot(email: string) {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/forgot',
				method: 'post',
				data: {
					email,
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
	logout() {
		return new Promise((resolve, reject) => {
			const requestOptions = {
				url: '/auth/logout',
				method: 'post',
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
export default AuthRepository;
