/* eslint-disable */
interface Destinator {
	email: string;
}
module.exports = class IMailService {
	constructor() {}

	send(to: Array<string>, element: any, type: string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}
	sendFake(to: Array<string>, element: any, type: string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}
};
