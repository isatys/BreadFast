const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
	apps: [
		{
			name: 'breadfast',
			script: './dist/server/main.js',
			env: {
				NODE_ENV: 'development',
				PORT: 3000,
				watch: 'dist/server',
				ignore_watch: ['node_modules'],
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 3000,
				watch: false,
			},
			env_test: {
				NODE_ENV: 'test',
				PORT: 3000,
				watch: false,
			},
		},
	],
};
