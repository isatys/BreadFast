import { authConstants } from '../../constants/auth.constants';

import User from '../../../application/entities/user';

interface AuthRepository {
	login: any;
}

export class Login {
	constructor(public authRepository: AuthRepository) {
		this.authRepository = authRepository;
	}

	execute(email: string, password: string) {
		return async (dispatch: any) => {
			const { LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_STARTED } = authConstants;
			dispatch({ type: LOGIN_STARTED });
			try {
				const user: User = await this.authRepository.login(
					email,
					password
				);

				dispatch({
					type: LOGIN_SUCCESS,
					user,
				});
			} catch (error) {
				dispatch({
					type: LOGIN_ERROR,
					error: error.message,
				});
				// setTimeout(() => {
				// 	dispatch({
				// 		type: LOGIN_ERROR,
				// 		error: '',
				// 	});
				// }, 5000);
			}
		};
	}
}
export default Login;
