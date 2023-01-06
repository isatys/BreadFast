import * as React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/icons/user.svg';

function Header(props: any) {
	const { isAdmin, isLogged, user } = props;
	return (
		<header>
			<div className="header">
				{isLogged && <Link to="/user">Astredhor et de platine</Link>}
				{!isLogged && <Link to="/">Astredhor et de platine</Link>}
				<div className="header-right">
					{!isLogged && (
						<Link to="/" className="primary">
							Accueil
						</Link>
					)}
					{!isLogged && (
						<>
							<Link to="/register">Inscription</Link>
							<Link to="/login">Connexion</Link>
						</>
					)}
					{isLogged && (
						<>
							{/* <Link to="/user">Dashboard</Link> */}
							{user && (
								<>
									<h5 className="header-welcome">
										Bonjour &#160;
										<b> {user.firstname}</b>
									</h5>
								</>
							)}
							<Link to="/user/profil">
								<img
									src={userIcon}
									alt="user"
									className="icon icon-black"
								/>
							</Link>
						</>
					)}
					{isLogged && isAdmin && (
						<>
							<Link to="/admin">Admin dashboard</Link>
						</>
					)}
				</div>
			</div>
			{isLogged && (
				<div className="header-user">
					<div className="row text-center">
						<div className="col-3">Tableau de bord</div>
						<div className="col-3">Conseiller</div>
						<div className="col-3">Cahier de cultures</div>
						<div className="col-3">Veille et documentation</div>
					</div>
				</div>
			)}
		</header>
	);
}
export default Header;
