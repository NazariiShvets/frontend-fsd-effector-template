const isTest = process.env.NODE_ENV === 'test'

module.exports = {
	presets: ['effector-http-api/babel-preset'],

	plugins: [
		['effector/babel-plugin', { reactSsr: isTest }]
	]
}
