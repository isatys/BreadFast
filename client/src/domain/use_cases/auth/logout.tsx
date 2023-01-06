import { authConstants } from '../../constants/auth.constants';

interface AuthRepository {
	logout: any;
}

export class Logout {
	constructor(public authRepository: AuthRepository) {
		this.authRepository = authRepository;
	}

	execute() {
		return async (dispatch: any) => {
			const { LOGOUT_SUCCESS, LOGOUT_ERROR, LOGOUT_STARTED } =
				authConstants;
			dispatch({ type: LOGOUT_STARTED });
			try {
				await this.authRepository.logout();
				dispatch({
					type: LOGOUT_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: LOGOUT_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default Logout;
