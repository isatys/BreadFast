import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

import AdminView from '../../views/admin/adminView';
import { GetUsers } from '../../../domain/use_cases/user/getUsers';
import { UpdateUserStatus } from '../../../domain/use_cases/admin/updateUserStatus';
import { UserRepository } from '../../../infrastructure/repository/userRepository';

function AdminController() {
	const { users, isDeleted, isLoadingUsers } = useSelector(
		({ userReducer }) => {
			return userReducer;
		}
	);

	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const userRepository = new UserRepository();
	const [usersSorts, setUsersSorts] = React.useState([]);
	React.useEffect(() => {
		const GetUsersUseCase = new GetUsers(userRepository);
		dispatch(GetUsersUseCase.execute());
	}, []);

	React.useEffect(() => {
		if (isLoadingUsers === false || isDeleted === true) {
			setUsersSorts(users);
		}
	}, [isLoadingUsers, isDeleted]);

	const updateIsAccepted = (userid: number) => {
		const UpdateUserStatusUseCase = new UpdateUserStatus(userRepository);
		dispatch(UpdateUserStatusUseCase.execute(userid, 'validate'));
	};
	// ne marche pas sur la date
	const sortList = (event: React.ChangeEvent<HTMLInputElement>) => {
		const name = event.currentTarget.id;

		setUsersSorts(
			usersSorts
				.slice()
				.sort(
					(a: number, b: number) =>
						(a[name] > b[name]) - (a[name] < b[name])
				)
		);
	};

	return (
		<AdminView
			users={usersSorts}
			updateIsAccepted={updateIsAccepted}
			sortList={sortList}
		/>
	);
}

export default AdminController;
