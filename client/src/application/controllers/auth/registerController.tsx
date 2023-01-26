import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import RegisterView from '../../views/auth/register';
import { AuthRepository } from '../../../infrastructure/repository/authRepository';
import { Register } from '../../../domain/use_cases/auth/register';

function RegisterController() {
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();

	const { isRegister, errorRegister } = useSelector(({ authReducer }) => {
		return authReducer;
	});

	const [user, setUser] = React.useState({
		lastname: '',
		firstname: '',
		email: '',
		phone: '',
		password: '',
		repeatPassword: '',
	});

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = event.currentTarget;

		setUser({
			...user,
			[name]: value,
		});
	};

	const onSubmit = (event: Event) => {
		event.preventDefault();
		const authRepository = new AuthRepository();
		const RegisterUseCase = new Register(authRepository);
		return dispatch(RegisterUseCase.execute(user));
	};

	return (
		<RegisterView
			onChange={onChange}
			onSubmit={onSubmit}
			isRegister={isRegister}
			errorRegister={errorRegister}
		/>
	);
}

export default RegisterController;
