import { v4 as uuidv4 } from 'uuid';

module.exports = class UuidService {
	async generate() {
		return uuidv4();
	}
};
