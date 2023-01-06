import { userConstants } from '../../constants/user.constants';

interface UserRepository {
	getUsers: any;
}

export class GetUsers {
	constructor(public userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute() {
		return async (dispatch: any) => {
			const { GET_USERS_STARTED, GET_USERS_SUCCESS, GET_USERS_ERROR } =
				userConstants;
			dispatch({ type: GET_USERS_STARTED });
			try {
				const users = await this.userRepository.getUsers();
				dispatch({
					type: GET_USERS_SUCCESS,
					users,
				});
			} catch (error) {
				dispatch({
					type: GET_USERS_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default GetUsers;
