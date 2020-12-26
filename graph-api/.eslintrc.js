module.exports = {
  env: {
    jest: true,
  },
  extends: [
    'stable',
    'stable/typescript',
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
  rules: {
    'complexity': 'off',
    '@typescript-eslint/no-extra-parens': 'off',
  },
}
