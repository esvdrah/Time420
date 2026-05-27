module.exports = {
	apps: [
		{
			name: 'Time420-app',
			script: './build/index.js',
			instances: 1,
			autorestart: true,
			watch: false,
			env: {
				NODE_ENV: 'production',
				PORT: 4647
			}
		}
	]
};
