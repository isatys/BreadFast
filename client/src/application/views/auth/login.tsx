import * as React from 'react';
import { Link } from 'react-router-dom';
function LoginView(props: any) {
	const { onSubmit, error } = props;
	return (
		<section className="form-container">
			{error && (
				<section className="warning">
					<div className="m-3">{error}</div>
				</section>
			)}

			<form onSubmit={onSubmit}>
				<div className="input-container">
					<label className="email">Email </label>
					<input
						className="input-field"
						type="email"
						name="email"
						placeholder="John.Doe@astredhor.com"
						required
					/>
				</div>

				<div className="input-container">
					<label className="password">Password </label>
					<input
						className="input-field"
						type="password"
						name="password"
						placeholder="********"
					/>
				</div>
				<div className="text-end">
					<Link to="/forgot-password" className="underline">
						Mot de passe oublié ?
					</Link>
				</div>
				<div className="button-container">
					<Link to="/">
						<button className="warning" type="button">
							Annuler
						</button>
					</Link>

					<button className="primary">Connexion</button>
				</div>
			</form>
		</section>
	);
}
export default LoginView;
