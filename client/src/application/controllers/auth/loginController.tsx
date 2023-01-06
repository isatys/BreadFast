import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import LoginView from '../../views/auth/login';
import { AuthRepository } from '../../../infrastructure/repository/authRepository';
import { Login } from '../../../domain/use_cases/auth/login';

function LoginController() {
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();

	const { errorLogin, isLogged } = useSelector(({ authReducer }) => {
		return authReducer;
	});
	const navigate = useNavigate();
	React.useEffect(() => {
		if (isLogged === true) {
			const path = '/user';
			navigate(path);
		}
	}, [isLogged]);

	const onSubmit = (event: Event) => {
		event.preventDefault();
		// trouver comment arreter de le faire raler
		const email: string = event.target.email.value.trim();
		const password: string = event.target.password.value.trim();
		const authRepository = new AuthRepository();
		const LoginUseCase = new Login(authRepository);
		return dispatch(LoginUseCase.execute(email, password));
	};

	return <LoginView onSubmit={onSubmit} error={errorLogin} />;
}

export default LoginController;
