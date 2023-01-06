const multer = require('multer');
const path = require('path');

const IMultipartBodyService = require('../../domain/services/multipartBody');

module.exports = class MulterService extends IMultipartBodyService {
	constructor(dest:any) {
		super();

		const storage = multer.diskStorage({
			destination(req:any, file:any, callback:any) {
				callback(null, 'temp/');
			},
			filename(req:any, file:any, callback:any) {
				callback(null, file.originalname);
			},
		});

		this.upload = multer({
			storage: storage
		});
	}

	handleSingleFile(filename:string) {
		return this.upload.single(filename);
	}

	handleFileArray(arrayOfFiles:any) {
		return this.upload.array(arrayOfFiles);
	}

	handleMultipleFields(arrayOfFields:any) {
		return this.upload.fields(arrayOfFields);
	}
};
