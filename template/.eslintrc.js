module.exports = {
  extends: [
    'airbnb-base',
    'react-app',
  ],
  rules: {
    'react/jsx-max-props-per-line': [2, { maximum: 1 }],
    'react/jsx-curly-newline': [2, { multiline: 'consistent', singleline: 'consistent' }],
    'react/jsx-indent': [2, 2],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-first-prop-new-line': [2],
    'import/extensions': [2, {
      tsx: 'never',
      ts: 'never',
    }]
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
