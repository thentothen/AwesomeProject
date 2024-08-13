module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  settings: { react: { version: '18.2' } },
  rules: {
    'react/jsx-no-target-blank': 'off',
    'no-unused-vars': 'off',
    'react/prop-types': 'off',
  },
};
