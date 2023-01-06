const dotenv = require('dotenv');

import createServer from './infrastructure/server/server';
import initSession from './infrastructure/server/session';

dotenv.config();

const port = process.env.PORT || 3001;
const env = process.env.NODE_ENV || 'development';

const start = () => {
	const session = initSession();
	const server = createServer(process.env, session);

	server.start(port, () => {
		/* istanbul ignore next */
		// eslint-disable-next-line no-console
		console.log(`Server started on port ${port} with process env ${env}`);
	});

};

start();
