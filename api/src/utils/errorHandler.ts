// eslint-disable-next-line no-unused-vars
const errorHandler = (error: any, req: any, res: any, next: any) => {
	if (error) {
		if (error.code) {
			return res.status(error.code).json({
				error: error.message,
			});
		}
		const sendedError = { ...error, code: 500 };
		return res.status(500).json({
			error: sendedError,
		});
	}
	return res.status(400).send();
};

module.exports = errorHandler;
