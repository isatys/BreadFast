/* eslint-disable */ 
module.exports = class IFileService {
	constructor() {}

	createTempDir(title:string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}

	async createResultDir(title:string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}

	async cleanDir(dirname:string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}

	moveFiles(files:any, dirname:string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}
};
