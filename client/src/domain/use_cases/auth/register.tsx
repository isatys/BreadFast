import { authConstants } from '../../constants/auth.constants';
import User from '../../../application/entities/user';
import Certifications from '../../../application/entities/certifications';

interface AuthRepository {
    register: any
}

export class Register {
	constructor(public authRepository:AuthRepository) {

        this.authRepository = authRepository;
	}

	execute(user:User, certifications:Certifications, checkCertification:boolean) {
		return async (dispatch:any) => {
			const { REGISTER_SUCCESS, REGISTER_ERROR, REGISTER_STARTED } =
				authConstants;
			dispatch({ type: REGISTER_STARTED });
			try {
				const regex = new RegExp('^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{12,100}$');
				if (!user.password.match(regex)) {
					throw new Error('Minimum 12 caractères, avec Majuscule, minuscule, chiffre et caractère spécial');
				}

				if (user.password === user.repeat_password) {
					await this.authRepository.register(
                        user,
						certifications,
						checkCertification
					);
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
