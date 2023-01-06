import * as React from 'react';

const dashboardView = () => {
	return (
		<section>
			<div className="card-dashboard row">
				<h3 className="background-primary">Tableau de bord</h3>
				<div className="row m-0">
					<div className="col-6">
						<div className="col-12">
							<div className="bloc stats">
								<h4>Mes statistiques</h4>
								<ul className="d-flex">
									<li className="stat-card">
										<h5>Nombre</h5>
										<h6>Sujets</h6>
									</li>
									<li className="stat-card">
										<h5>Nombre</h5>
										<h6>Sujets</h6>
									</li>
									<li className="stat-card">
										<h5>Nombre</h5>
										<h6>Sujets</h6>
									</li>
									<li className="stat-card">
										<h5>Nombre</h5>
										<h6>Sujets</h6>
									</li>
									<li className="stat-card">
										<h5>Nombre</h5>
										<h6>Sujets</h6>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-12">
							<div className="bloc photo">
								<h4>Photo</h4>
								<div>photo</div>
							</div>
						</div>
					</div>
					<div className="col-6">
						<div className="bloc todo">
							<h4>To do list </h4>
							<ul className="d-flex">
								<li className="todo-item">
									<div className="row">
										<input
											type="checkbox"
											id="1"
											name="1"
										/>
										<label htmlFor="1">
											Rendez vous chez le jardinier SARL
											JOLIE FLEURS{' '}
										</label>
									</div>
									<small className="row">
										text en plus petit mais utile rdv a 19h
									</small>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row m-0">
					<div className="bloc doc-fav">
						<h4>Documents favoris</h4>
						<ul className="d-flex">
							<li className="doc-item">
								<h5>Nombre</h5>
								<h6>Sujets</h6>
							</li>
							<li className="doc-item">
								<h5>Nombre</h5>
								<h6>Sujets</h6>
							</li>
							<li className="doc-item">
								<h5>Nombre</h5>
								<h6>Sujets</h6>
							</li>
							<li className="doc-item">
								<h5>Nombre</h5>
								<h6>Sujets</h6>
							</li>
							<li className="doc-item">
								<h5>Nombre</h5>
								<h6>Sujets</h6>
							</li>
						</ul>
					</div>
				</div>
				<div className="row m-0">
					<div className="bloc map">
						<div className="row m-0 title">
							<h4 className="col-7">Prévisions météo</h4>
							<input
								className="col-4"
								placeholder="Rechercher un endroit.."
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default dashboardView;
