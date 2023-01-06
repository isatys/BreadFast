import { userConstants } from '../../constants/user.constants';

interface UserRepository {
	updateUserStatus: any;
}

export class UpdateUserStatus {
	constructor(public userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute(userid: number, status: string) {
		return async (dispatch: any) => {
			const {
				UPDATE_USER_STARTED,
				UPDATE_USER_SUCCESS,
				UPDATE_USER_ERROR,
			} = userConstants;
			dispatch({ type: UPDATE_USER_STARTED });
			try {
				const user = await this.userRepository.updateUserStatus(
					userid,
					status
				);
				dispatch({
					type: UPDATE_USER_SUCCESS,
					user,
				});
			} catch (error) {
				dispatch({
					type: UPDATE_USER_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default UpdateUserStatus;
