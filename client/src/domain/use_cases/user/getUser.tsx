import { userConstants } from '../../constants/user.constants';

interface UserRepository {
	getUser: any;
}

export class GetUser {
	constructor(public userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	execute(userid: number) {
		return async (dispatch: any) => {
			const { GET_USER_STARTED, GET_USER_SUCCESS, GET_USER_ERROR } =
				userConstants;
			dispatch({ type: GET_USER_STARTED });
			try {
				const user = await this.userRepository.getUser(userid);
				dispatch({
					type: GET_USER_SUCCESS,
					user,
				});
			} catch (error) {
				dispatch({
					type: GET_USER_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default GetUser;
