import * as React from 'react';
import { Link } from 'react-router-dom';
import ModalView from '../layout/modal';
import register from '../../../domain/messages/register';

function RegisterView(props:any) {
	const { onChange, onSubmit, isRegister, showModal, onCancel, errorRegister, onChangeLogo, addCertification, certifications, onChangeCertification, onShowCertification, checkCertification } = props;

	return (
		<section className="form-container">
			<form onSubmit={onSubmit}>
				{errorRegister && (
					<section className="warning">
						<div className="m-3">{errorRegister}</div>
					</section>
				)}
				<div className="input-container">
					<label className="firstname" htmlFor="firstname">Prénom *</label>
					<input
						onChange={onChange}
						className="input-field"
						type="text"
						name="firstname"
						placeholder="John"
						id="firstname"
						required
					/>
				</div>
				<div className="input-container">
					<label className="lastname">Nom *</label>
					<input
						onChange={onChange}
						className="input-field"
						type="text"
						name="lastname"
						placeholder="Doe"
						required
					/>
				</div>
				<div className="input-container">
					<label className="email">Email *</label>
					<input
						onChange={onChange}
						className="input-field"
						type="email"
						name="email"
						placeholder="John.Doe@astredhor.com"
						required
					/>
				</div>
				<div className="input-container">
					<label className="phone">Téléphone *</label>
					<input
						onChange={onChange}
						className="input-field"
						type="tel"
						name="phone"
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
						placeholder="33601020304"
					/>
				</div>
				<div className="input-container">
					<label className="password">Password * </label>
					<input
						onChange={onChange}
						className="input-field"
						type="password"
						name="password"
						placeholder="********"
					/>
				</div>
				<div className="input-container">
					<label className="repeat_password">Repeat Password *</label>
					<input
						onChange={onChange}
						className="input-field"
						type="password"
						name="repeat_password"
						placeholder="********"
					/>
				</div>
				<hr></hr>
				<div className="input-container">
					<label className="company">Company</label>
					<input
						onChange={onChange}
						className="input-field"
						type="text"
						name="company"
						placeholder="Astredhor"
					/>
				</div>
				<div className="input-container">
					<label className="company_logo" htmlFor="company_logo">
						Logo d'entreprise
					</label>
					<input
						onChange={onChangeLogo}
						className="input-field"
						type="file"
						name="company_logo"
						placeholder="Astredhor"
						accept="image/png, image/jpeg"
					/>
				</div>

				<div className='input-container'>
						Vous êtes conseiller : Votre entreprise dispose d'un agrément et vous êtes certifié
					<input type="checkbox" id="conseiller" name="conseiller" onChange={onShowCertification} checked={checkCertification}/>
				</div>

				{certifications && certifications.map((certification:object, key:number) =>
					<div key={key}>
						<div className="input-container">
							<label className="certification">
								Numéro de certificat
							</label>
							<input
								onChange={onChangeCertification}
								className="input-field"
								type="text"
								name="certification"
								placeholder="0123456789123456"
								data-n-certification={key}
							/>
						</div>
						<div className="input-container">
							<label className="certification">
								Date limite de validité
							</label>
							<input
								onChange={onChangeCertification}
								className="input-field"
								type="date"
								name="certification_date"
								data-n-certification={key}
							/>
						</div>
						<div className="input-container">
							<label className="certification_doc">
								Certification document
							</label>
							<input
								onChange={onChangeCertification}
								className="input-field"
								type="file"
								name="certification_doc"
								accept="image/png, image/jpeg"
								data-n-certification={key}
							/>
						</div>
					</div>
				)}

				{certifications && certifications.length > 0 && 
					<div className="input-container">
						<button
							onClick={addCertification}
							className="input-field"
							type="button"
							name="certification_doc"
						>
							Ajouter certification
						</button>
					</div>
				}

				<div className="button-container">
					<Link to="/">
						<button className="warning" type="button">
							Annuler
						</button>
					</Link>
					<button className="primary">Inscription</button>
				</div>
			</form>

			{isRegister &&
				<ModalView 
					showModal={showModal}
					data={register}
					onCancel={onCancel}
				/>
			}
		</section>
	);
}
export default RegisterView;
