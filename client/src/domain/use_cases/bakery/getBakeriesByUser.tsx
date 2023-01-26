import { bakeryConstants } from '../../constants/bakery.constants';
interface BakeryRepository {
	getBakeriesByUser: any;
}

export class GetBakeriesByUser {
	constructor(public bakeryRepository: BakeryRepository) {
		this.bakeryRepository = bakeryRepository;
	}

	execute(userId: number) {
		return async (dispatch: any) => {
			const {
				GET_BAKERIES_STARTED,
				GET_BAKERIES_SUCCESS,
				GET_BAKERIES_ERROR,
			} = bakeryConstants;
			dispatch({ type: GET_BAKERIES_STARTED });
			try {
				const _bakeries = await this.bakeryRepository.getBakeriesByUser(
					userId
				);
				dispatch({
					type: GET_BAKERIES_SUCCESS,
					_bakeries,
				});
			} catch (error) {
				dispatch({
					type: GET_BAKERIES_ERROR,
					error: error.message,
				});
			}
		};
	}
}
export default GetBakeriesByUser;
