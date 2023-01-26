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
	} = props;
	return (
		<>
			<div className="row offset-3 col-6 justify-content-center fw-bold">
				profil
			</div>
			<div className="row">
				<div className="col-12 d-flex justify-content-center bold">
					<div className="form-container">
						{isDeleted && (
							<div className="warning">
								<div className="m-3">Utilisateur supprimé</div>
							</div>
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
						</div>
					</div>
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
		</>
	);
};

export default userView;
