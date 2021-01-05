module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'eslint-comments', 'jsx-a11y'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'react/jsx-props-no-spreading': ['error', { custom: 'ignore' }],
    // Next.js <Link> component doesn't play nice with anchor validation
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/prop-types': 0,
    'react/no-array-index-key': 0,
    'import/prefer-default-export': 0,
    'no-nested-ternary': 0,
    'no-underscore-dangle': 0,
    'eslint-comments/no-unlimited-disable': 0,
    'eslint-comments/disable-enable-pair': 0,
    'react/require-default-props': 0,
    '@typescript-eslint/naming-convention': [
      'error', {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      }
    ]
  },
  ignorePatterns: [
    '.eslintrc.js',
    'next.config.js',
    'next-env.d.ts'
  ],
};
