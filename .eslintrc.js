module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
    'plugin:i18next/recommended',
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    '@typescript-eslint',
    'i18next',
    'react-hooks',
  ],
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'no-unused-vars': 'warn',
    'max-len': ['error', {'ignoreComments': true, 'code': 120}],
    'new-cap': ['error', {'capIsNew': false}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  'globals': {
    '__IS_DEV__': true,
  },
  'overrides': [
    {
      files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
};
