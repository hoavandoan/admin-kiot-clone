module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  ignorePatterns: [
    '/node_modules/**',
    '/build/**',
    '/src/App.test.js',
    '/src/reportWebVitals.js',
    '/src/setupTests.js',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        trailingComma: 'es5',
        semi: false,
        singleQuote: true,
        'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
      },
    ],
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'after-used', ignoreRestSiblings: false },
    ],
    'react/react-in-jsx-scope': 'off',
  },
}
