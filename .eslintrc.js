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
  ],
  'rules': {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'require-jsdoc': 0,
    'no-unused-vars': 'warn',
    'max-len': ['error', {'ignoreComments': true, 'code': 120}],
  },
  'globals': {
    '__IS_DEV__': true,
  },
};
