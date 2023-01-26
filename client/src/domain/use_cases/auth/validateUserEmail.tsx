import { authConstants } from '../../constants/auth.constants';
interface ValidateUserEmailRepository {
	validateUserEmail: any;
}

export class ValidateUserEmail {
	constructor(
		public validateUserEmailRepository: ValidateUserEmailRepository
	) {
		this.validateUserEmailRepository = validateUserEmailRepository;
	}

	execute(uuid: string) {
		return async (dispatch: any) => {
			const {
				VALIDATE_USER_EMAIL_STARTED,
				VALIDATE_USER_EMAIL_SUCCESS,
				VALIDATE_USER_EMAIL_ERROR,
			} = authConstants;
			dispatch({ type: VALIDATE_USER_EMAIL_STARTED });
			try {
				await this.validateUserEmailRepository.validateUserEmail(uuid);
				dispatch({
					type: VALIDATE_USER_EMAIL_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: VALIDATE_USER_EMAIL_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default ValidateUserEmail;
