import * as React from 'react';
import Header from '../../views/layout/header';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function HeaderController() {
	const { isLogged, user } = useSelector(({ authReducer }) => {
		return authReducer;
	});
	const navigate = useNavigate();
	React.useEffect(() => {
		if (isLogged === false) {
			const path = '/';
			navigate(path);
		}
	}, [isLogged]);
	let isAdmin = false;
	if (user && user.role == 'ADMIN') isAdmin = true;
	return <Header isAdmin={isAdmin} isLogged={isLogged} user={user} />;
}

export default HeaderController;
