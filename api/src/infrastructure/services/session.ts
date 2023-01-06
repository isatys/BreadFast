/* eslint-disable class-methods-use-this */
import User from '../../domain/entities/user';
module.exports = class SessionService {
	async save(session: any, user: User) {
		// eslint-disable-next-line no-param-reassign
		session.user = await { ...user };
		return user;
	}
};
