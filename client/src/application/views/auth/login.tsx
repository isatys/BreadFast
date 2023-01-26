import * as React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../../assets/icons/envelope.svg';
import lockIcon from '../../assets/icons/lock.svg';
import chevronIcon from '../../assets/icons/chevron-right.svg';

function LoginView(props: any) {
	const {
		onChange,
		onSubmit,
		error,
		onResend,
		isResendLoading,
		isResendSuccess,
	} = props;
	return (
		<section className="form-container">
			<div className="container">
				<div className="screen">
					<div className="screen__content">
						<form className="login" onSubmit={onSubmit}>
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
							</div>
							{isResendSuccess === false && error && (
								<section className="error">
									<div>{error}</div>
									{error ===
										'Veuillez valider votre email.' && (
										<div className="row">
											Pour renvoyer un email cliquez ici :{' '}
											<button
												className="warning"
												type="button"
												onClick={onResend}
												disabled={isResendLoading}
											>
												Renvoyer un email
											</button>
										</div>
									)}
								</section>
							)}
							{isResendSuccess && (
								<section className="success">
									<div className="m-3">
										Un email viens de vous etre renvoyer !
									</div>
								</section>
							)}
							<button className="button login__submit">
								<span className="button__text">Log In Now</span>
								<img
									src={chevronIcon}
									alt="chevronIcon"
									className="button__icon"
								/>
							</button>
						</form>
						<div className="social-login">
							<h3>
								<div>
									<Link
										to="/forgot-password"
										className="forget-password"
									>
										Mot de passe oublié ?
									</Link>
								</div>
							</h3>
						</div>
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
export default LoginView;
