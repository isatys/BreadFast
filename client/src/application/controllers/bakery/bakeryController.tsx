import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import CreateBakeryView from '../../views/bakery/create/bakeryView';
import { BakeryRepository } from '../../../infrastructure/repository/bakeryRepository';
import { Create } from '../../../domain/use_cases/bakery/create';
function BakeryController() {
	type State = { bakery: object };
	type AppDispatch = ThunkDispatch<State, any, AnyAction>;
	const dispatch: AppDispatch = useDispatch();
	const [bakery, setBakery] = React.useState({
		name: '',
		address: '',
		city: '',
		country: '',
		logo: 'rien',
	});
	const { user } = useSelector(({ authReducer }) => {
		return authReducer;
	});

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value } = event.currentTarget;

		setBakery({
			...bakery,
			[name]: value,
		});
	};
	const onSubmit = (event: Event) => {
		event.preventDefault();

		const bakeryRepository = new BakeryRepository();
		const CreateUseCase = new Create(bakeryRepository);
		return dispatch(CreateUseCase.execute(user.id, bakery));
	};

	return <CreateBakeryView onChange={onChange} onSubmit={onSubmit} />;
}

export default BakeryController;
