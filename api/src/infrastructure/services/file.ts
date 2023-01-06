/* eslint-disable class-methods-use-this */
const { mkdir, rename } = require('node:fs/promises');

const IFileService = require('../../domain/services/file');

export default class FileService extends IFileService {
	constructor() {
		super();

	}

	async createDir(title:string) {
		const path = `${title}/`;
		await mkdir(path);

		return path;
	}

	async moveFile(file:any, tempDir:string, dirname:string) {
		const oldPath = `${tempDir}/${file}`;
		const newPath = dirname + '/' + file;

		rename(oldPath, newPath);
	}

	async moveFiles(files:any, tempDir:string, dirname:string) {
		await files.forEach((file:any) => {
			const oldPath = `${tempDir}/${file.originalname}`;
			const newPath = dirname + '/' + file.originalname;

			rename(oldPath, newPath);
		});
	}

};