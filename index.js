module.exports = {
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: [
    'react-hooks'
  ],
  rules: {},
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      options: {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: false,
        singleQuote: true,
        arrowParens: 'always',
        bracketSameLine: false,
        bracketSpacing: true
      },
      rules: {},
    }
  ],
};
