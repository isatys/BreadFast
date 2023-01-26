import * as React from 'react';
import Header from '../../views/layout/header';
import { useSelector } from 'react-redux';

function HeaderController() {
	const { isLogged, user } = useSelector(({ authReducer }) => {
		return authReducer;
	});

	const [isAdmin, setIsAdmin] = React.useState(false);
	const [isMobileBtn, setIsMobileBtn] = React.useState(false);

	React.useEffect(() => {
		if (user && user.role === 'ADMIN') {
			setIsAdmin(true);
		}
	}, [user]);

	const onMobileBtnClick = () => {
		setIsMobileBtn(!isMobileBtn);
	};

	return (
		<Header
			isAdmin={isAdmin}
			isLogged={isLogged}
			user={user}
			isMobileBtn={isMobileBtn}
			onMobileBtnClick={onMobileBtnClick}
		/>
	);
}

export default HeaderController;
