import * as React from 'react';

function ModalConfirmDeleteUser(props: any) {
	const { showModal, onCancel, user, onConfirm } = props;
	return (
		<div
			className={`modal fade${showModal ? ' show modal-custom' : ''}`}
			id="deleteModal"
			tabIndex="-1"
			role="dialog"
			aria-labelledby="modalLabel"
			style={{ display: `${showModal ? 'block' : 'none'}` }}
		>
			<div className="modal-dialog modal-lg" role="document">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="modalLabel">
							Utilisateur : {user.lastname} {user.firstname}
						</h5>
						<button
							type="button"
							className="close btn-close"
							data-dismiss="modal"
							aria-label="Close"
							onClick={onCancel}
						/>
					</div>
					<div className="modal-body">
						<div id="roleAdmin">
							Souhaitez-vous supprimer {user.lastname}{' '}
							{user.firstname} de l'application ?
						</div>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-primary"
							data-dismiss="modal"
							id="submitAdmin"
							onClick={() => onConfirm(user.id)}
						>
							Valider
						</button>
						<button
							type="button"
							className="btn btn-secondary"
							data-dismiss="modal"
							id="cancelButton"
							onClick={onCancel}
						>
							Annuler
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalConfirmDeleteUser;
