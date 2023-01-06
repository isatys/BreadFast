/* eslint-disable max-len */

const logoutAuth = () => {
	async function execute(session: any) {
		session.destroy();

		return true;
	}

	return {
		execute,
	};
};

module.exports = {
	logoutAuth,
};
