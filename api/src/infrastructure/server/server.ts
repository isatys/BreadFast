const express = require('express');
const cors = require('cors');

import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

const buildDependencies = require('../config/repositories');

const { authRoutes } = require('../../application/routes/auth');
const { userRoutes } = require('../../application/routes/user');
const { bakeryRoutes } = require('../../application/routes/bakery');

const errorHandler = require('../../utils/errorHandler');

export default function createServer(env: any, session: any) {
	const server = express();

	const dependencies = buildDependencies(env);
	if (env.NODE_ENV === 'production') {
		server.enable('trust proxy');
		server.disable('x-powered-by');
	}

	server.use(
		session({
			store: new PrismaSessionStore(new PrismaClient(), {
				checkPeriod: 2 * 60 * 1000, //ms
				dbRecordIdIsSessionId: true,
				dbRecordIdFunction: undefined,
			}),
			secret: env.SESSION_SECRET,
			resave: false,
			saveUninitialized: true,
			proxy: process.env.NODE_ENV === 'production',
			cookie: {
				domain: env.COOKIE_DOMAIN || 'localhost',
				secure: env.NODE_ENV === 'production',
				maxAge: 1000 * 3600 * 24,
			},
		})
	);
	/* istanbul ignore next */
	server.use(
		cors({
			/* Origin could be a regexp for example (.com and .fr) */
			origin:
				process.env.REACT_APP_FRONTEND_URL || 'http://localhost:3000',
			credentials: true,
		})
	);

	server.use(express.json({ limit: '5mb' }));
	server.use(
		express.urlencoded({
			extended: true,
		})
	);
	server.use('/auth', authRoutes(dependencies));
	server.use('/user', userRoutes(dependencies));
	server.use('/bakery', bakeryRoutes(dependencies));

	server.use(errorHandler);

	server.start = (port: any, callback: any) => {
		/* istanbul ignore next */
		server.listen(port, callback);
	};

	return server;
}
