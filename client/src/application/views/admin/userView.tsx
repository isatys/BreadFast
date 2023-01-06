import * as React from 'react';
import { Link } from 'react-router-dom';
import ModalConfirmDeleteUser from '../components/modal/modalConfirmDeleteUser';

const userView = (props: any) => {
	const {
		user,
		deleteUser,
		isDeleted,
		updateUserStatus,
		showModalConfirmDeleteUser,
		showModal,
		onCancel,
		updateIsAccepted,
		updateIsRefuse,
	} = props;
	return (
		<section>
			<div className="row offset-3 col-6 justify-content-center fw-bold">
				Status : {user.status === 'refuse' && <>Refusé</>}
				{user.status === 'pending' && (
					<>
						<div className="row sp-bt">
							<button
								type="button"
								className="clickable btn btn-primary col-5"
								onClick={() => updateIsAccepted(user.id)}
							>
								Valider
							</button>
							<button
								type="button"
								className="clickable btn btn-danger col-5"
								onClick={() => updateIsRefuse(user.id)}
							>
								Refuser
							</button>
						</div>
					</>
				)}
				{user.status === 'validate' && <>Validé</>}
			</div>
			<div className="row">
				<div className="col-12 d-flex justify-content-center bold">
					<section className="form-container">
						{isDeleted && (
							<section className="warning">
								<div className="m-3">Utilisateur supprimé</div>
							</section>
						)}
						<div className="input-container">
							<label className="firstname">Prénom </label>
							<input
								className="input-field"
								type="text"
								name="firstname"
								defaultValue={user.firstname}
								disabled
							/>
						</div>
						<div className="input-container">
							<label className="lastname">Nom </label>
							<input
								className="input-field"
								type="text"
								name="lastname"
								defaultValue={user.lastname}
								disabled
							/>
						</div>
						<div className="input-container">
							<label className="email">Email </label>
							<input
								className="input-field"
								type="email"
								name="email"
								defaultValue={user.email}
								disabled
							/>
						</div>
						<div className="input-container">
							<label className="phone">Téléphone </label>
							<input
								className="input-field"
								type="tel"
								name="phone"
								defaultValue={user.phone}
								disabled
							/>
						</div>
						<div className="input-container">
							<label className="phone_secondary">
								Téléphone secondaire
							</label>
							<input
								className="input-field"
								type="tel"
								name="phone_secondary"
								defaultValue={user.phone_secondary}
								disabled
							/>
						</div>
						<hr></hr>
						<div className="input-container">
							<label className="company">Company</label>
							<input
								className="input-field"
								type="text"
								name="company"
								placeholder="Astredhor"
								defaultValue={user.company}
								disabled
							/>
						</div>
						<div className="input-container">
							<label
								className="company_logo"
								htmlFor="company_logo"
							>
								Logo d'entreprise
							</label>
							<input
								className="input-field"
								type="file"
								name="company_logo"
								placeholder="Astredhor"
								accept="image/png, image/jpeg"
							/>
						</div>
						<div className="input-container">
							<label className="certification">
								Certification number
							</label>
							<input
								className="input-field"
								type="text"
								name="certification"
								placeholder="0123456789123456"
							/>
						</div>
						<div className="input-container">
							<label className="certification_doc">
								Certification document
							</label>
							<input
								className="input-field"
								type="file"
								name="certification_doc"
								placeholder="caca"
							/>
						</div>

						<div className="button-container">
							<button
								className="danger"
								type="button"
								onClick={showModal}
								disabled={isDeleted}
							>
								Supprimer l'utilisateur
							</button>
							{/* updateUserStatus */}
							<button
								className="primary"
								type="button"
								onClick={() => updateUserStatus(user.id)}
								disabled={isDeleted}
							>
								Modifier le status
							</button>
						</div>
					</section>
				</div>
			</div>
			{showModalConfirmDeleteUser === true && (
				<ModalConfirmDeleteUser
					showModal={showModal}
					onCancel={onCancel}
					user={user}
					onConfirm={deleteUser}
				/>
			)}
		</section>
	);
};

export default userView;
