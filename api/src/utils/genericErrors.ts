// eslint-disable-next-line max-classes-per-file
export class AccessDeniedError extends Error {
	private code: number
	constructor(paramName:string) {
		super(`${paramName}`);
		this.name = 'AccessDeniedError';
		this.code = 403;
	}
}

export class MissingParamError extends Error {
	private code: number
	constructor(paramName:string) {
		super(`Missing param: ${paramName}`);
		this.name = 'MissingParamError';
		this.code = 400;
	}
}

export class InvalidParamError extends Error {
	private code: number
	constructor(paramName:string) {
		super(`${paramName}`);
		this.name = 'InvalidParamError';
		this.code = 400;
	}
}

export class NotAcceptableError extends Error {
	private code: number
	constructor(paramName:string) {
		super(`Not Acceptable: ${paramName}`);
		this.name = 'NotAcceptableError';
		this.code = 406;
	}
}


export class TestError extends Error {
	private code: number
	constructor(paramName:string, paramString:string) {
		super(`Not Acceptable: ${paramName}`);
		this.name = 'NotAcceptableError';
		this.code = 406;
	}
}

export class GenericError extends Error {
	constructor(arrayError:any) {
		super(arrayError);
	}
}
