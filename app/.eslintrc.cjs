module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb-base'
  ],
  plugins: ['import', 'react'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'import/extensions': ['error', 'ignorePackages', {
      js: 'always',
      jsx: 'always'
    }]
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
