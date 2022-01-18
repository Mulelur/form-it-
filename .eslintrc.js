module.exports = {
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'unicorn'
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'plugin:eslint-comments/recommended',
    'prettier'
  ],
  env: {
    node: true,
    browser: true,
    jest: true
  },
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  rules: {
    semi: 'off',
    '@typescript-eslint/semi': 'error',
    'react/prop-types': 'warn',
    'no-restricted-syntax': 'off',
    'no-console': 'error',
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    'promise/always-return': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'no-useless-constructor': 'off',
    '@typescript-eslint/no-useless-constructor': 'error',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'off',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    '@typescript-eslint/explicit-function-return-type': 'off',
    // disable the rule for all files
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    allowArgumentsExplicitlyTypedAsAny: 'off',

    // Use function hoisting to improve code readability
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',
    'unicorn/filename-case': 'off',

    'jsx-a11y/label-has-associated-control': 'off',
    'arrow-body-style': 'off',
    // Function scoping
    'unicorn/consistent-function-scoping': 'off',

    '@typescript-eslint/typedef': ['off']
  },
  // For **-test.js ignore no undifined
  overrides: [
    {
      files: ['**/*-test.ts', '**/*-test.tsx'],
      env: {
        jest: true
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      plugins: ['@typescript-eslint'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        '@typescript-eslint/explicit-module-boundary-types': ['off'],
        '@typescript-eslint/typedef': [
          'error',
          {
            parameter: true
          }
        ],
        '@typescript-eslint/no-inferrable-types': [
          'warn',
          {
            ignoreParameters: true
          }
        ]
      }
    }
  ]
};
