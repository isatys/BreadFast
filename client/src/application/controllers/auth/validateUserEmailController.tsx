import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useParams } from 'react-router-dom';

import ValidateUserEmailView from '../../views/auth/validateUserEmail';
import { ValidateUserEmailRepository } from '../../../infrastructure/repository/validateUserEmailRepository';
import { ValidateUserEmail } from '../../../domain/use_cases/auth/validateUserEmail';

function ValidateUserEmailController() {
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();

	const { errorValidate, isValidate } = useSelector(({ authReducer }) => {
		return authReducer;
	});

	let { uuid } = useParams();
	const [isValidateStart, setIsValidateStart] = React.useState(true);
	React.useEffect(() => {
		const validateUserEmailRepository = new ValidateUserEmailRepository();
		const ValidateUserEmailUseCase = new ValidateUserEmail(
			validateUserEmailRepository
		);
		dispatch(ValidateUserEmailUseCase.execute(uuid));

		setIsValidateStart(false);
	}, [isValidateStart]);

	return (
		<ValidateUserEmailView
			errorValidate={errorValidate}
			isValidate={isValidate}
		/>
	);
}

export default ValidateUserEmailController;
