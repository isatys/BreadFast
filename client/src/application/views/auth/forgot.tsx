import * as React from 'react';
import { Link } from 'react-router-dom';
function ForgotView(props: any) {
	const { onSubmit, error, success, isLoading } = props;
	return (
		<section className="form-container">
			{error && (
				<section className="warning">
					<div className="m-3">{error}</div>
				</section>
			)}
			{success && (
				<section className="success">
					<div className="m-3">
						{success}{' '}
						<Link to="/login" className="underline">
							Se connecter ici
						</Link>
					</div>
				</section>
			)}
			{isLoading && (
				<div className="row col-lg-12 justify-content-center">
					<div className="spinner-border " role="status">
						<span className="visually-hidden">Loading...</span>
					</div>
				</div>
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
				<div className="button-container">
					{success && (
						<Link to="/login">
							<button className="warning" type="button">
								Retour
							</button>
						</Link>
					)}
					{!success && (
						<Link to="/login">
							<button className="warning" type="button">
								Annuler
							</button>
						</Link>
					)}
					<button className="primary" disabled={isLoading}>
						Envoyer
					</button>
				</div>
			</form>
		</section>
	);
}
export default ForgotView;
