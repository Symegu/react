module.exports = {
  settings: {
    react: {
      version: 'detect'
    }
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['prettier', 'eslint:recommended', 'plugin:prettier/recommended', 'plugin:react/recommended', 'plugin:react-hooks/recommended', 'plugin:storybook/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', 'prettier', 'react-hooks', 'jest'],
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true
    }],
    'react/prop-types': 0,
    'linebreak-style': ['error', 'unix'],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'react/react-in-jsx-scope': 'off',
    'react/display-name': 'off'
  },
  overrides: [{
    files: ['webpack.config.js'],
    rules: {
      '@typescript-eslint/no-var-requires': ['off']
    }
  }]
};