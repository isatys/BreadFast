import bakeryConstants from '../../domain/constants/bakery.constants';

const initialState = {};
// eslint-disable-next-line default-param-last
const bakeryReducer = (state = initialState, action: any) => {
	const { CREATE_STARTED, CREATE_ERROR, CREATE_SUCCESS } = bakeryConstants;
	switch (action.type) {
		case CREATE_STARTED:
			return {
				...state,
				errorCREATE: '',
				successCREATE: '',
				isLoading: true,
				isCREATE: false,
			};
		case CREATE_SUCCESS:
			return {
				...state,
				successCREATE:
					"Votre demande d'inscription a bien été enregistrée. Vous pourrez accéder à l'application après validation de votre inscription par un administrateur. Vous serez prochainement notifié par mail.",
				isLoading: false,
				isCREATE: true,
			};
		case CREATE_ERROR:
			return {
				...state,
				errorCREATE: action.error,
				isLoading: false,
				isCREATE: false,
			};
		default:
			return state;
	}
};

export default bakeryReducer;
