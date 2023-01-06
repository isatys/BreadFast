import userConstants from '../../domain/constants/user.constants';

const initialState = {
	isLogged: false,
	isLoadingUser: true,
	isLoadingUsers: true,
	isErrorUser: false,
};
// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action: any) => {
	const {
		GET_USERS_STARTED,
		GET_USERS_SUCCESS,
		GET_USERS_ERROR,
		UPDATE_USER_STARTED,
		UPDATE_USER_SUCCESS,
		UPDATE_USER_ERROR,
		GET_USER_STARTED,
		GET_USER_SUCCESS,
		GET_USER_ERROR,
		DELETE_USER_STARTED,
		DELETE_USER_SUCCESS,
		DELETE_USER_ERROR,
	} = userConstants;
	switch (action.type) {
		case GET_USERS_STARTED:
			return {
				...state,
				errorGetUsers: '',
				isLoadingUsers: true,
			};
		case GET_USERS_SUCCESS:
			return {
				...state,
				isLoadingUsers: false,
				users: action.users,
			};
		case GET_USERS_ERROR:
			return {
				...state,
				errorGetUsers: action.error,
				isLoadingUsers: false,
			};
		case GET_USER_STARTED:
			return {
				...state,
				errorGetUser: '',
			};
		case GET_USER_SUCCESS:
			return {
				...state,
				user: action.user,
				isErrorUser: false,
				isLoadingUser: false,
				isDeleted: action.user.deleted,
			};
		case GET_USER_ERROR:
			return {
				...state,
				errorGetUser: action.error,
				isErrorUser: true,
				isLoadingUser: false,
			};
		case UPDATE_USER_STARTED:
			return {
				...state,
				errorUpdateUser: '',
			};
		case UPDATE_USER_SUCCESS:
			if (state.users) {
				// eslint-disable-next-line no-param-reassign
				state.users.find((user) => user.id === action.user.id).status =
					action.user.status;
			}
			return {
				...state,
				user: action.user,
			};
		case UPDATE_USER_ERROR:
			return {
				...state,
				errorUpdateUser: action.error,
			};
		case DELETE_USER_STARTED:
			return {
				...state,
				errorDeleteUser: '',
			};
		case DELETE_USER_SUCCESS:
			return {
				...state,
				isDeleted: true,
			};
		case DELETE_USER_ERROR:
			return {
				...state,
				errorDeleteUser: action.error,
			};
		default:
			return state;
	}
};

export default authReducer;
