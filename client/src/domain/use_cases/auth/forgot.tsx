import { authConstants } from '../../constants/auth.constants';
import User from '../../../application/entities/user';
interface AuthRepository {
	forgot: any;
}

export class Forgot {
	constructor(public authRepository: AuthRepository) {
		this.authRepository = authRepository;
	}

	execute(email: string) {
		return async (dispatch: any) => {
			const { FORGOT_SUCCESS, FORGOT_ERROR, FORGOT_STARTED } =
				authConstants;
			dispatch({ type: FORGOT_STARTED });
			try {
				await this.authRepository.forgot(email);
				dispatch({
					type: FORGOT_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: FORGOT_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default Forgot;
