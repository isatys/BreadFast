import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useNavigate } from 'react-router-dom';
import LoginView from '../../views/auth/login';
import { AuthRepository } from '../../../infrastructure/repository/authRepository';
import { ValidateUserEmailRepository } from '../../../infrastructure/repository/validateUserEmailRepository';
import { Login } from '../../../domain/use_cases/auth/login';
import { SendValidateUserEmail } from '../../../domain/use_cases/auth/sendValidateUserEmail';

function LoginController() {
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();

	const { errorLogin, isLogged, isResendLoading, isResendSuccess } =
		useSelector(({ authReducer }) => {
			return authReducer;
		});
	const navigate = useNavigate();
	React.useEffect(() => {
		if (isLogged === true) {
			const path = '/user';
			navigate(path);
		}
	}, [isLogged]);

	const [user, setUser] = React.useState({
		email: '',
		password: '',
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
		// trouver comment arreter de le faire raler
		const email: string = user.email.trim();
		const password: string = user.password.trim();
		const authRepository = new AuthRepository();
		const LoginUseCase = new Login(authRepository);
		return dispatch(LoginUseCase.execute(email, password));
	};

	const onResend = (event: Event) => {
		event.preventDefault();
		const email: string = user.email;
		const authRepository = new ValidateUserEmailRepository();
		const SendValidateUseCase = new SendValidateUserEmail(authRepository);
		return dispatch(SendValidateUseCase.execute(email));
	};
	return (
		<LoginView
			onChange={onChange}
			onSubmit={onSubmit}
			error={errorLogin}
			onResend={onResend}
			isResendLoading={isResendLoading}
			isResendSuccess={isResendSuccess}
		/>
	);
}

export default LoginController;
