import axios from 'axios';

export const createAxiosInstance = (
	baseURL = process.env.REACT_APP_BACKEND_URL
) => {
	const instance = axios.create({
		baseURL,
	});

	instance.defaults.withCredentials = true;

	instance.interceptors.response.use(
		(response) => {
			return response;
		},
		(error) => {
			throw new Error(error.response.data.error);
		}
	);

	return instance;
};

export default createAxiosInstance;
