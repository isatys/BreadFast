import User from '../../entities/user';

import {
	InvalidParamError,
	MissingParamError,
	AccessDeniedError,
} from '../../../utils/genericErrors';

const updateUserStatus = (UserRepository: any, MailService: any) => {
	async function execute(userid: number, status: string) {
		const user = await UserRepository.updateUserStatus(userid, status);
		if (status === 'validate') {
			return MailService.send([user], user, 'validate-user');
		}
		if (status === 'refuse') {
			return MailService.send([user], user, 'reject-user');
		}
	}

	return {
		execute,
	};
};

module.exports = {
	updateUserStatus,
};
