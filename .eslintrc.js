module.exports = {
	parser: '@typescript-eslint/parser',
	extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	rules: {
		'no-empty': 'error', // 빈 블록문을 지양한다.
		'default-case': 'error', // switch 문에 default가 포함되어야 한다.
		'default-case-last': 'error', // switch 문에 default가 항상 마지막에 작성되어야 한다.
		eqeqeq: ['error', 'always'], // '==' 밎 '!=' 사용을 지양한다.
		'prefer-template': 'error', // 문자열 연결 연산자를 지양하고 템플릿 리터럴을 사용한다.
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
};
