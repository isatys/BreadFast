import { bakeryConstants } from '../../constants/bakery.constants';
import { BakeryRegister } from '../../../application/entities/bakery';
interface BakeryRepository {
	create: any;
}

export class Create {
	constructor(public bakeryRepository: BakeryRepository) {
		this.bakeryRepository = bakeryRepository;
	}

	execute(userId: number, bakery: BakeryRegister) {
		return async (dispatch: any) => {
			const { CREATE_STARTED, CREATE_SUCCESS, CREATE_ERROR } =
				bakeryConstants;
			dispatch({ type: CREATE_STARTED });
			try {
				const _bakery = await this.bakeryRepository.create(
					userId,
					bakery
				);
				dispatch({
					type: CREATE_SUCCESS,
					_bakery,
				});
			} catch (error) {
				dispatch({
					type: CREATE_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default Create;
