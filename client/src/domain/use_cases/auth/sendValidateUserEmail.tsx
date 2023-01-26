import { authConstants } from '../../constants/auth.constants';
interface ValidateUserEmailRepository {
	sendValidateUserEmail: any;
}

export class SendValidateUserEmail {
	constructor(
		public validateUserEmailRepository: ValidateUserEmailRepository
	) {
		this.validateUserEmailRepository = validateUserEmailRepository;
	}

	execute(email: string) {
		return async (dispatch: any) => {
			const {
				SEND_VALIDATE_USER_EMAIL_STARTED,
				SEND_VALIDATE_USER_EMAIL_SUCCESS,
				SEND_VALIDATE_USER_EMAIL_ERROR,
			} = authConstants;
			dispatch({ type: SEND_VALIDATE_USER_EMAIL_STARTED });
			try {
				await this.validateUserEmailRepository.sendValidateUserEmail(
					email
				);
				dispatch({
					type: SEND_VALIDATE_USER_EMAIL_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: SEND_VALIDATE_USER_EMAIL_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default SendValidateUserEmail;
