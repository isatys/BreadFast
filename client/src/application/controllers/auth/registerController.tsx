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
		phone_secondary: '',
		company: '',
		company_logo: null,
		password: '',
		repeat_password: '',
	});

	const [certifications, setCertifications] = React.useState([]);
	const [checkCertification, setCheckCertification] = React.useState(false);
	const [company_logo, setLogo] = React.useState<File>();
	const [showModal, setShowModal] = React.useState(false);

	React.useEffect(() => {
		if (isRegister === true) {
			setShowModal(true);
		}
	}, [isRegister]);


	const onChangeLogo = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files) {
			setLogo(event.target.files[0]);
		}
	};

	const onCancel = () => {
		setShowModal(false);
	};

	const addCertification = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.preventDefault();
		let arrayCertification = Array.from(certifications);

		const certification = {
			certification: '',
			certification_doc: '',
			certification_date: ''
		}
		arrayCertification.push(certification);

		setCertifications(arrayCertification)
	};

	const onChangeCertification = (event: React.ChangeEvent<HTMLInputElement>) => {
		const attribute = parseInt(event.currentTarget.getAttribute('data-n-certification'));
		const { name, value } = event.currentTarget;

		let newCertifications :{ certification: string, certification_doc: null, certification_date: Date }[] = [];

		certifications.forEach((elem, key) => {
			if (attribute === key) {
				if (name === 'certification') {
					elem.certification = value; 
					newCertifications.push(elem);
				} else if (name === 'certification_date') {
					elem.certification_date = value; 
					newCertifications.push(elem);
				} else {
					elem.certification_doc = event.target.files[0];
					newCertifications.push(elem);
				}
			} else {
				newCertifications.push(elem);
			}
		});

		setCertifications(newCertifications);
	}

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = event.currentTarget;

		setUser({
			...user,
			[name]: value,
		});
	};

	const onShowCertification = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.currentTarget.checked === true) {
			setCertifications([{
				certification: '',
				certification_doc: '',
				certification_date: ''
			}]);
		} else {
			setCertifications([]);
		}

		setCheckCertification(!checkCertification);
	}

	const onSubmit = (event: Event) => {
		event.preventDefault();
		const authRepository = new AuthRepository();
		const RegisterUseCase = new Register(authRepository);
		user.company_logo = company_logo;
		return dispatch(RegisterUseCase.execute(user, certifications, checkCertification));
	};

	return (
		<RegisterView
			onChange={onChange}
			onSubmit={onSubmit}
			isRegister={isRegister}
			showModal={showModal}
			onCancel={onCancel}
			errorRegister={errorRegister}
			onChangeLogo={onChangeLogo}
			addCertification={addCertification}
			certifications={certifications}
			onChangeCertification={onChangeCertification}
			onShowCertification={onShowCertification}
			checkCertification={checkCertification}
		/>
	);
}

export default RegisterController;
