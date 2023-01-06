import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { useParams } from 'react-router-dom';

import UserView from '../../views/admin/userView';
import Loader from '../../views/components/loader';
import Error from '../../views/components/error';
import { GetUser } from '../../../domain/use_cases/user/getUser';
import { DeleteUser } from '../../../domain/use_cases/admin/deleteUser';
import { UpdateUserStatus } from '../../../domain/use_cases/admin/updateUserStatus';
import { UserRepository } from '../../../infrastructure/repository/userRepository';

function ManageUserController() {
	const { userid } = useParams();
	type State = { user: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const userRepository = new UserRepository();
	const [showModalConfirmDeleteUser, setshowModalConfirmDeleteUser] =
		React.useState(false);
	const { user, isLoadingUser, isErrorUser, errorGetUser, isDeleted } =
		useSelector(({ userReducer }) => {
			return userReducer;
		});
	React.useEffect(() => {
		const GetUserUseCase = new GetUser(userRepository);
		dispatch(GetUserUseCase.execute(Number(userid)));
	}, []);
	function showModal() {
		setshowModalConfirmDeleteUser(true);
	}

	function deleteUserById(userid: number) {
		const DeleteUserUseCase = new DeleteUser(userRepository);
		dispatch(DeleteUserUseCase.execute(userid));
		setshowModalConfirmDeleteUser(false);
	}

	const onCancel = () => {
		setshowModalConfirmDeleteUser(false);
	};
	const updateIsAccepted = (userid: number) => {
		const UpdateUserStatusUseCase = new UpdateUserStatus(userRepository);
		dispatch(UpdateUserStatusUseCase.execute(userid, 'validate'));
	};
	const updateIsRefuse = (userid: number) => {
		const UpdateUserStatusUseCase = new UpdateUserStatus(userRepository);
		dispatch(UpdateUserStatusUseCase.execute(userid, 'refuse'));
	};

	if (isLoadingUser) {
		return <Loader />;
	} else if (isErrorUser) {
		return <Error error={errorGetUser} />;
	} else {
		return (
			<UserView
				user={user}
				deleteUser={deleteUserById}
				isDeleted={isDeleted}
				onCancel={onCancel}
				showModal={showModal}
				showModalConfirmDeleteUser={showModalConfirmDeleteUser}
				updateIsAccepted={updateIsAccepted}
				updateIsRefuse={updateIsRefuse}
			/>
		);
	}
}

export default ManageUserController;
