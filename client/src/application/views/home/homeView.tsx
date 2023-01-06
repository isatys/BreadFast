import * as React from 'react';
import defaultLogo from '../../assets/img/logo-astredhor.png';

const homePageView = () => {
	return (
		<section>
			<div></div>
			<div className="row">
				<div className="col-4 mb-2">
					<div className="card home-min-height">
						<img
							className="card-img-top logo-home-page"
							src={defaultLogo}
							alt="logo"
						></img>
						<div className="card-body">
							<h4 className="card-title">Conseil spécifique</h4>
							<p className="card-text">
								Gérez vos fiches clients, leurs parcellaires,
								établissez des diagnostics au champ, éditez et
								exportez vos préconisations directement depuis
								votre tablette.
							</p>
						</div>
					</div>
				</div>

				<div className="col-4 mb-2">
					<div className="card home-min-height">
						<img
							className="card-img-top logo-home-page"
							src={defaultLogo}
							alt="logo"
						></img>
						<div className="card-body">
							<h4 className="card-title">Conseil stratégique</h4>
							<p className="card-text">
								Accompagnez vos entreprises grâce à la
								réalisation de conseil stratégique (à venir) et
								de nouveaux services comme le suivi dynamique
								des stocks (phytosanitaires, fertilisants, EPI,
								etc.)
							</p>
						</div>
					</div>
				</div>

				<div className="col-4 mb-2">
					<div className="card home-min-height">
						<img
							className="card-img-top logo-home-page"
							src={defaultLogo}
							alt="logo"
						></img>
						<div className="card-body">
							<h4 className="card-title">
								Veille et documentation
							</h4>
							<p className="card-text">
								Consultez la veille faite par votre filière, les
								fiches CEPP, les fiches produits personnalisées,
								ou encore les protocoles d'épidémiosurveillance
								réalisés par d'autres utilisateurs.
							</p>
						</div>
					</div>
				</div>

				<div className="col-4 mb-2">
					<div className="card home-min-height">
						<img
							className="card-img-top logo-home-page"
							src={defaultLogo}
							alt="logo"
						></img>
						<div className="card-body">
							<h4 className="card-title">
								Enregistrement des pratiques
							</h4>
							<p className="card-text">
								Enregistrez rapidement et simplement vos
								pratiques culturales pour maitriser au mieux la
								conduite de vos cultures, éditer des cahiers de
								traitements, répondre en toute simplicité aux
								audits, éditer des références culturales...
							</p>
						</div>
					</div>
				</div>

				<div className="col-8 mb-2">
					<div className="card home-min-height">
						<img
							className="card-img-top logo-home-page"
							src={defaultLogo}
							alt="logo"
						></img>
						<div className="card-body">
							<h4 className="card-title">
								Echanges d'informations
							</h4>
							<p className="card-text">
								Echangez avec vos clients les documents que vous
								souhaitez, directement sur la plateforme. Editez
								et consultez rapidement des bilans territoriaux
								pour la rédaction de vos BSV. Partagez des
								fiches clients avec vos collègues.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default homePageView;
