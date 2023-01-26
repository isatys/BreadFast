import * as React from 'react';
import { Link } from 'react-router-dom';
import userIcon from '../../assets/icons/user.svg';
import defaultLogo from '../../assets/img/logo.png';

import btnGrip from '../../assets/icons/grip-lines.svg';
import btnClose from '../../assets/icons/close.svg';
function Header(props: any) {
	const { isAdmin, isLogged, user, onMobileBtnClick, isMobileBtn } = props;
	return (
		<header>
			<div className="header">
				<div className="logo">
					{isLogged && (
						<Link to="/user">
							<img src={defaultLogo} alt="logo"></img>
						</Link>
					)}
					{!isLogged && (
						<Link to="/">
							<img src={defaultLogo} alt="logo"></img>
						</Link>
					)}
				</div>
				<div className={'nav ' + (isMobileBtn === true ? 'show' : '')}>
					<ul>
						<li className="nav-item">
							<Link to="/#">coucou cest un text long</Link>
						</li>
						<li className="nav-item">
							<Link to="/#">TTUU</Link>
						</li>
						<li className="nav-item">
							<Link to="/#">TTUU</Link>
						</li>
						<li className="nav-item">
							<Link to="/#">TTUU</Link>
						</li>
					</ul>
				</div>

				<div className="header-btn-container">
					{!isLogged && (
						<>
							<Link to="/register" className="btn">
								Inscription
							</Link>
							<Link to="/login" className="btn">
								Connexion
							</Link>
						</>
					)}
					{isLogged && (
						<>
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
				<button
					className="mobile-btn"
					onClick={() => onMobileBtnClick()}
				>
					{isMobileBtn === false && (
						<img src={btnGrip} alt="menuTag" className="icon"></img>
					)}
					{isMobileBtn === true && (
						<img
							src={btnClose}
							alt="closeMenuTag"
							className="icon"
						></img>
					)}
				</button>
			</div>
		</header>
	);
}
export default Header;
