import { authConstants } from '../../constants/auth.constants';
import { UserRegister } from '../../../application/entities/user';

interface AuthRepository {
	register: any;
}

export class Register {
	constructor(public authRepository: AuthRepository) {
		this.authRepository = authRepository;
	}

	execute(user: UserRegister) {
		return async (dispatch: any) => {
			const { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_STARTED } =
				authConstants;
			dispatch({ type: REGISTER_STARTED });
			try {
				const regex = new RegExp(
					'^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-z]).{8,100}$'
				);
				if (!user.password.match(regex)) {
					throw new Error(
						'Minimum 12 caractères, avec Majuscule, minuscule et un chiffre.'
					);
				}
				if (user.password === user.repeatPassword) {
					await this.authRepository.register(user);
				} else {
					throw new Error('Les mots de passe ne correspondent pas.');
				}
				dispatch({
					type: REGISTER_SUCCESS,
				});
			} catch (error) {
				dispatch({
					type: REGISTER_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default Register;
