import authConstants from '../../domain/constants/auth.constants';

const initialState = {
	isLogged: false,
	isResendSuccess: false,
};
// eslint-disable-next-line default-param-last
const authReducer = (state = initialState, action: any) => {
	const {
		REGISTER_STARTED,
		REGISTER_ERROR,
		REGISTER_SUCCESS,
		LOGIN_STARTED,
		LOGIN_ERROR,
		LOGIN_SUCCESS,
		FORGOT_STARTED,
		FORGOT_ERROR,
		FORGOT_SUCCESS,
		LOGOUT_SUCCESS,
		VALIDATE_USER_EMAIL_STARTED,
		VALIDATE_USER_EMAIL_SUCCESS,
		VALIDATE_USER_EMAIL_ERROR,
		SEND_VALIDATE_USER_EMAIL_STARTED,
		SEND_VALIDATE_USER_EMAIL_SUCCESS,
		SEND_VALIDATE_USER_EMAIL_ERROR,
	} = authConstants;
	switch (action.type) {
		case REGISTER_STARTED:
			return {
				...state,
				errorRegister: '',
				successRegister: '',
				isLoading: true,
				isRegister: false,
			};
		case REGISTER_SUCCESS:
			return {
				...state,
				successRegister:
					"Votre demande d'inscription a bien été enregistrée. Vous pourrez accéder à l'application après validation de votre inscription par un administrateur. Vous serez prochainement notifié par mail.",
				isLoading: false,
				isRegister: true,
			};
		case REGISTER_ERROR:
			return {
				...state,
				errorRegister: action.error,
				isLoading: false,
				isRegister: false,
			};
		case LOGIN_STARTED:
			return {
				...state,
				errorLogin: '',
				isLoading: true,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isLoading: false,
				isLogged: true,
				user: action.user,
			};
		case LOGIN_ERROR:
			return {
				...state,
				errorLogin: action.error,
				isLoading: false,
			};
		case FORGOT_STARTED:
			return {
				...state,
				errorForgot: '',
				successForgot: '',
				isLoading: true,
				isForgot: false,
			};
		case FORGOT_SUCCESS:
			return {
				...state,
				successForgot:
					"Un email vient d'être envoyer. Consultez votre boite mail.",
				isLoading: false,
				isForgot: true,
			};
		case FORGOT_ERROR:
			return {
				...state,
				errorForgot: action.error,
				isLoading: false,
				isForgot: false,
			};
		case VALIDATE_USER_EMAIL_STARTED:
			return {
				...state,
				errorValidate: '',
				isValidate: false,
			};
		case VALIDATE_USER_EMAIL_SUCCESS:
			return {
				...state,
				isValidate: true,
			};
		case VALIDATE_USER_EMAIL_ERROR:
			return {
				...state,
				errorValidate: action.error,
				isValidate: false,
			};
		case LOGOUT_SUCCESS:
			return {
				...state,
				isLogged: false,
			};
		case SEND_VALIDATE_USER_EMAIL_STARTED:
			return {
				...state,
				errorValidate: '',
				isResendLoading: true,
				isResendSuccess: false,
			};
		case SEND_VALIDATE_USER_EMAIL_SUCCESS:
			return {
				...state,
				isResendLoading: false,
				isResendSuccess: true,
			};
		case SEND_VALIDATE_USER_EMAIL_ERROR:
			return {
				...state,
				errorValidate: action.error,
				isResendLoading: false,
				isResendSuccess: false,
			};
		default:
			return state;
	}
};

export default authReducer;
