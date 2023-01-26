import * as React from 'react';
import { Link } from 'react-router-dom';
import User from '../../entities/user';
const profilView = (props: any) => {
	const { user, logout, onChange } = props;
	return (
		<>
			<div className="row justify-content-center">profilView</div>
			<section className="form-container">
				{/* <form onSubmit={onSubmit}> */}

				{/* {errorRegister && (
					<section className="warning">
						<div className="m-3">{errorRegister}</div>
					</section>
				)} */}
				<div className="input-container">
					<label className="firstname">Prénom </label>
					<input
						onChange={onChange}
						className="input-field"
						type="text"
						name="firstname"
						placeholder="John"
						defaultValue={user.firstname}
						required
					/>
				</div>
				<div className="input-container">
					<label className="lastname">Nom </label>
					<input
						onChange={onChange}
						className="input-field"
						type="text"
						name="lastname"
						placeholder="Doe"
						defaultValue={user.lastname}
						required
					/>
				</div>
				<div className="input-container">
					<label className="email">Email </label>
					<input
						onChange={onChange}
						className="input-field"
						type="email"
						name="email"
						defaultValue={user.email}
						placeholder="John.Doe@astredhor.com"
						required
					/>
				</div>
				<div className="input-container">
					<label className="phone">Téléphone </label>
					<input
						onChange={onChange}
						className="input-field"
						type="tel"
						name="phone"
						defaultValue={user.phone}
						placeholder="33601020304"
						required
					/>
				</div>
				<div className="input-container">
					<label className="phone_secondary">
						Téléphone secondaire
					</label>
					<input
						onChange={onChange}
						className="input-field"
						type="tel"
						name="phone_secondary"
						defaultValue={user.phone_secondary}
						placeholder="33601020304"
					/>
				</div>

				<div className="button-container">
					<button className="danger" type="button" onClick={logout}>
						Logout
					</button>

					<button className="primary">Enregistrer</button>
				</div>
				{/* </form> */}
			</section>
		</>
	);
};

export default profilView;
