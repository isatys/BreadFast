const webpack = require('webpack');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const APP_DIR = path.resolve(__dirname, 'src');

module.exports = (env, argv) => {
	const target =
		Array.isArray(argv.target) && argv.target.length == 1
			? argv.target[0]
			: argv.target;
	const devMode = argv.mode !== 'production';
	const testMode = env.test;

	const entryFile = target == 'web' ? 'index.tsx' : 'client.tsx';
	const BUILD_DIR =
		target == 'web'
			? path.resolve(__dirname, 'dist/static')
			: path.resolve(__dirname, 'dist/server');

	const ENV_FILE = testMode
		? path.join(__dirname, '.env.test')
		: path.join(__dirname, '.env');

	return {
		target,
		entry: ['core-js/stable', path.join(APP_DIR, entryFile)],

		output: {
			path: BUILD_DIR,
			publicPath: '/',
			filename:
				devMode || target == 'node'
					? '[name].js'
					: '[name].[contenthash].js',
			assetModuleFilename: 'images/[contenthash][ext][query]',
		},
		externals: {
			express: 'require("express")',
			mongodb: 'require("mongodb")',
		},
		watchOptions: {
			poll: 1000,
		},
		plugins: [
			new Dotenv({
				path: ENV_FILE, // Path to .env file (this is the default)
				safe: true,
				systemvars: true,
			}),
			new webpack.ids.HashedModuleIdsPlugin(),
			new MiniCssExtractPlugin({
				filename:
					devMode || target == 'node'
						? '[name].css'
						: '[name].[contenthash].css',
				chunkFilename:
					devMode || target == 'node'
						? '[id].css'
						: '[id].[contenthash].css',
			}),
			new LoadablePlugin(),
		],
		module: {
			rules: [
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: [
						{
							loader: require.resolve('babel-loader'),
							options: {
								babelrc: true,
								plugins: ['@loadable/babel-plugin'],
							},
						},
					],
				},
				{
					test: /\.css$/i,
					use: [
						devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
						'postcss-loader',
					],
				},
				{
					test: /\.(scss)$/,
					use: [
						{
							loader: devMode
								? 'style-loader'
								: MiniCssExtractPlugin.loader,
						},
						{
							loader: 'css-loader',
						},
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins() {
										return [require('autoprefixer')];
									},
								},
							},
						},
						{
							loader: 'sass-loader',
						},
					],
				},
				{
					test: /\.(png|jpg|jpeg|gif|svg)$/i,
					exclude: /node_modules/,
					type: 'asset/resource',
				},
			],
		},
		resolve: {
			plugins: [new TsconfigPathsPlugin()],
			extensions: ['.tsx', '.ts', '.js'],
		},
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				chunks: 'all',
				maxInitialRequests: Infinity,
				maxSize: 240000,
				minSize: 80000,
				cacheGroups: {
					vendor: {
						test: /[\\/]node_modules[\\/]/,
						name(module) {
							// get the name. E.g. node_modules/packageName/not/this/part.js
							// or node_modules/packageName
							const packageName = module.context.match(
								/[\\/]node_modules[\\/](.*?)([\\/]|$)/
							)[1];

							// npm package names are URL-safe,
							// but some servers don't like @ symbols
							return `npm.${packageName.replace('@', '')}`;
						},
					},
				},
			},
		},
	};
};
