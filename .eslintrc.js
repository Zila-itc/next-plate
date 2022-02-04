module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
		jest: true,
	},
	extends: [
		'next',
		'plugin:@next/next/recommended',
		'next/core-web-vitals',
		'prettier',
		'plugin:storybook/recommended',
	],
	plugins: ['prettier', '@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			tsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'error',
		'react/no-children-prop': 0,
	},
};
