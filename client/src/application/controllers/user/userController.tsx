import * as React from 'react';
import User from '../../entities/user';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import ProfilView from '../../views/user/profilView';
import { Logout } from '../../../domain/use_cases/auth/logout';
import { AuthRepository } from '../../../infrastructure/repository/authRepository';

function UserController() {
	const { user, isLogged } = useSelector(({ authReducer }) => {
		return authReducer;
	});
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();

	const authRepository = new AuthRepository();

	function logout() {
		const LogoutUseCase = new Logout(authRepository);
		dispatch(LogoutUseCase.execute());
	}

	return <ProfilView user={user} logout={logout} />;
}

export default UserController;
