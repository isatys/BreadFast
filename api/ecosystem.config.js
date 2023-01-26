const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });

module.exports = {
	apps: [
		{
			name: 'breadfast-API',
			script: './dist/api.js',
			env: {
				NODE_ENV: 'development',
				PORT: 3001,
				watch: 'dist',
				ignore_watch: ['node_modules'],
			},
			env_production: {
				NODE_ENV: 'production',
				PORT: 3001,
				watch: false,
			},
			env_test: {
				NODE_ENV: 'test',
				PORT: 3001,
				watch: false,
			},
		},
	],
};
