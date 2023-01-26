import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import DashboardView from '../../views/dashboard/dashboardView';
import { GetBakeriesByUser } from '../../../domain/use_cases/bakery/getBakeriesByUser';
import { BakeryRepository } from '../../../infrastructure/repository/bakeryRepository';

function DashboardController() {
	const { bakeries } = useSelector(({ bakeryReducer }) => {
		return bakeryReducer;
	});
	const { user } = useSelector(({ userReducer }) => {
		return userReducer;
	});

	type State = { bakeries: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const bakeryRepository = new BakeryRepository();
	React.useEffect(() => {
		const GetBakeriesByUserUseCase = new GetBakeriesByUser(
			bakeryRepository
		);
		dispatch(GetBakeriesByUserUseCase.execute(user.id));
	}, []);

	return <DashboardView bakeries={bakeries} />;
}

export default DashboardController;
