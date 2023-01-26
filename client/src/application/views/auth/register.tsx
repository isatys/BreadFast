import * as React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/icons/user.svg';
import lockIcon from '../../assets/icons/lock.svg';
import chevronIcon from '../../assets/icons/chevron-right.svg';
import emailIcon from '../../assets/icons/envelope.svg';
import phoneIcon from '../../assets/icons/phone.svg';

function RegisterView(props: any) {
	const { onChange, onSubmit, errorRegister, isRegister } = props;

	return (
		<section className="form-container">
			<div className="container">
				<div className="screen">
					<div className="screen__content">
						<form className="register" onSubmit={onSubmit}>
							<div className="login__field">
								<img
									src={userIcon}
									alt="userIcon"
									className="login__icon"
								/>
								<input
									onChange={onChange}
									type="text"
									name="firstname"
									className="login__input"
									placeholder="Firstname"
									required
								/>
							</div>
							<div className="login__field">
								<img
									src={userIcon}
									alt="userIcon"
									className="login__icon"
								/>
								<input
									onChange={onChange}
									type="text"
									name="lastname"
									className="login__input"
									placeholder="Lastname"
									required
								/>
							</div>
							<div className="login__field">
								<img
									src={emailIcon}
									alt="emailIcon"
									className="login__icon"
								/>
								<input
									onChange={onChange}
									type="email"
									name="email"
									className="login__input"
									placeholder="Email"
									required
								/>
							</div>
							<div className="login__field">
								<img
									src={phoneIcon}
									alt="phoneIcon"
									className="login__icon"
								/>
								<input
									onChange={onChange}
									type="tel"
									name="phone"
									className="login__input"
									placeholder=" +33 6 01 02 03 04"
									required
								/>
							</div>
							<div className="login__field">
								<img
									src={lockIcon}
									alt="lockIcon"
									className="login__icon"
								/>
								<input
									className="login__input"
									onChange={onChange}
									type="password"
									name="password"
									placeholder="Password"
									required
								/>
								<small className="password-info">
									Minimum 12 caractères, avec majuscule,
									minuscule et un chiffre *
								</small>
							</div>
							<div className="login__field">
								<img
									src={lockIcon}
									alt="lockIcon"
									className="login__icon"
								/>
								<input
									className="login__input"
									onChange={onChange}
									type="password"
									name="repeatPassword"
									placeholder="repeat password"
									required
								/>
							</div>
							{isRegister && (
								<section className="success">
									<>
										Inscription prise en compte merci de
										vérifier votre email
									</>
								</section>
							)}
							{errorRegister && (
								<section className="error">
									<div>{errorRegister}</div>
								</section>
							)}
							<button className="button login__submit">
								<span className="button__text">
									SIGN UP Now
								</span>
								<img
									src={chevronIcon}
									alt="chevronIcon"
									className="button__icon"
								/>
							</button>
						</form>
					</div>
					<div className="screen__background">
						<span className="screen__background__shape screen__background__shape4"></span>
						<span className="screen__background__shape screen__background__shape3"></span>
						<span className="screen__background__shape screen__background__shape2"></span>
						<span className="screen__background__shape screen__background__shape1"></span>
					</div>
				</div>
			</div>
		</section>
	);
}
export default RegisterView;
