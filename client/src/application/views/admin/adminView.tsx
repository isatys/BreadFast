import * as React from 'react';
import { Link } from 'react-router-dom';

import User from '../../entities/user';

const adminView = (props: any) => {
	const { users, updateIsAccepted, sortList } = props;
	return (
		<>
			<div className="row justify-content-center">adminView</div>
			<div className="row">
				<div className="col-12 d-flex justify-content-center bold">
					Liste des utilisateurs
				</div>
				<div className="col-12 mt-3">
					<table className="table">
						<thead>
							<tr>
								<th
									scope="col"
									className="pe-pointer"
									id="lastname"
									onClick={sortList}
								>
									Nom
								</th>
								<th
									scope="col"
									className="pe-pointer"
									id="firstname"
									onClick={sortList}
								>
									Prénom
								</th>
								<th
									scope="col"
									className="pe-pointer"
									id="company"
									onClick={sortList}
								>
									Entreprise
								</th>
								<th
									scope="col"
									className="pe-pointer"
									id="status"
									onClick={sortList}
								>
									Statut
								</th>
								<th
									scope="col"
									className="pe-pointer"
									id="role"
									onClick={sortList}
								>
									Role
								</th>
								<th
									scope="col"
									className="pe-pointer"
									id="date"
									onClick={sortList}
								>
									Date d'inscription
								</th>
								<th scope="col">Détail</th>
							</tr>
						</thead>
						{users && (
							<tbody>
								{users.map((user: User) => (
									<tr key={user.id}>
										<td className="bold">
											{user.lastname}
										</td>
										<td>{user.firstname}</td>
										<td>{user.company}</td>
										<td>
											{user.status === 'refuse' &&
												'Refusé'}
											{user.status === 'pending' && (
												<button
													type="button"
													className="clickable btn btn-primary"
													onClick={() =>
														updateIsAccepted(
															user.id
														)
													}
												>
													Valider
												</button>
											)}
											{user.status === 'validate' &&
												'Validé'}
										</td>
										{user.role === 'ADMIN' && (
											<td className="fw-bold text-danger">
												{user.role}
											</td>
										)}
										{user.role !== 'ADMIN' && (
											<td>{user.role}</td>
										)}

										<td>{user.createdAt}</td>

										<td>
											<Link to={`/admin/user/${user.id}`}>
												<button
													className="clickable btn btn-primary"
													type="button"
												>
													Détail
												</button>
											</Link>
										</td>
									</tr>
								))}
							</tbody>
						)}
					</table>
				</div>
			</div>
		</>
	);
};

export default adminView;
