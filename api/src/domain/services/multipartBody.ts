/* eslint-disable */ 
module.exports = class IMultipartBodyService {
	constructor() {}

	handleSingleFile(filename:string) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}

	handleFileArray(arrayOfFiles:any) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}

	handleMultipleFields(arrayOfFields:any) {
		return new Promise((resolve, reject) => {
			reject(new Error('not implemented'));
		});
	}
};
