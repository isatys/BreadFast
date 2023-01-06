import { userConstants } from '../../constants/user.constants';

interface UserRepository {
	deleteUser: any;
}

export class DeleteUser {
	constructor(public userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute(userid: number) {
		return async (dispatch: any) => {
			const {
				DELETE_USER_STARTED,
				DELETE_USER_SUCCESS,
				DELETE_USER_ERROR,
			} = userConstants;
			dispatch({ type: DELETE_USER_STARTED });
			try {
				await this.userRepository.deleteUser(userid);
				dispatch({
					type: DELETE_USER_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: DELETE_USER_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default DeleteUser;
