module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ['plugin:vue/vue3-essential', '@vue/eslint-config-typescript'],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		semi: 0,
		'no-new': 0,
		'space-before-function-paren': 0,
		'comma-dangle': 0,
	},
}
