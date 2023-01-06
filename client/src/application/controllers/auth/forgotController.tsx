import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import ForgotView from '../../views/auth/forgot';
import { AuthRepository } from '../../../infrastructure/repository/authRepository';
import { Forgot } from '../../../domain/use_cases/auth/forgot';

function ForgotController() {
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const { errorForgot, successForgot, isLoading } = useSelector(
		({ authReducer }) => {
			return authReducer;
		}
	);
	const onSubmit = (event: Event) => {
		event.preventDefault();
		// trouver comment arreter de le faire raler
		const email: string = event.target.email.value.trim();
		const authRepository = new AuthRepository();
		const ForgotUseCase = new Forgot(authRepository);
		return dispatch(ForgotUseCase.execute(email));
	};

	return (
		<ForgotView
			onSubmit={onSubmit}
			error={errorForgot}
			success={successForgot}
			isLoading={isLoading}
		/>
	);
}

export default ForgotController;
