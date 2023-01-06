import * as express from 'express';
import * as session from 'express-session';
import * as path from 'path';

import { PrismaSessionStore } from '@quixo3/prisma-session-store';
import { PrismaClient } from '@prisma/client';

import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { ChunkExtractor } from '@loadable/server';
import { ClientController } from './application/controllers/clientController';

declare module 'express-session' {
	export interface SessionData {
		user: { [key: string]: any };
	}
}

const server = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'developpement';
server.use(express.static(`${__dirname}/../static`));

server.use(express.static(`${__dirname}/../static`));

server.use(
	session({
		secret: process.env.SESSION_SECRET,
		store: new PrismaSessionStore(new PrismaClient(), {
			checkPeriod: 2 * 60 * 1000, //ms
			dbRecordIdIsSessionId: true,
			dbRecordIdFunction: undefined,
		}),
		resave: true,
		saveUninitialized: false,
		rolling: true,
		cookie: {
			httpOnly: false,
			maxAge: 1000 * 60 * 60 * 72,
		},
	})
);

server.get('*', (req, res) => {
	const initialState = {
		authReducer: { user: req.session.user, isLogged: !!req.session.user },
	};

	const location = req.url;
	const statsFile = path.resolve('dist/static/loadable-stats.json');
	// We create an extractor from the statsFile
	const extractor = new ChunkExtractor({ statsFile });
	const jsx = extractor.collectChunks(
		<ClientController location={location} initialState={initialState} />
	);

	const app = renderToString(jsx);
	const scriptTags = extractor.getScriptTags();
	const linkTags = extractor.getLinkTags();
	const styleTags = extractor.getStyleTags();
	return res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<meta charset="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1">
				<title>B@CO</title>
				<link rel="icon" href="data:,">
				${linkTags}
				${styleTags}
			</head>
			<body>
				<div id="app">${app}</div>
				<script>
					window.__PRELOADED_STATE__ = ${JSON.stringify(initialState).replace(
						/</g,
						'\\u003c'
					)}
				</script>
				${scriptTags}
			</body>
		</html>
	`);
});

server.listen(PORT, () => {
	console.log(`Server started on port ${PORT} with process env ${ENV}`);
});
