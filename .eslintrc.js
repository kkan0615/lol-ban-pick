// eslint-disable-next-line no-undef
module.exports = {
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  extends: [
    'eslint:recommended',
    // '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:cypress/recommended', // Eslint for cypress
    './.eslintrc-auto-import.json', // Eslint for auto-import plugin
  ],
  globals: {
    'NodeJS': true,
  },
  env: {
    'node': true,
  },
  rules: {
    // For Coding
    'quotes': ['error', 'single'], // "" => ''
    'semi': ['error', 'never'], // semicolon
    'no-empty': 'error', // No empty in bracket
    'indent': [ 'error', 2, { 'SwitchCase' : 1 } ],
    'comma-dangle': ['error', 'only-multiline'], // Ex) { a, b, }
    'object-curly-spacing': ['error', 'always'], // Space between { },
    'no-multi-spaces': 'error', // Ex) var a =  1 => var a = 1
    'no-unused-vars': 'off',
    'space-before-blocks': 'error', // Ex) if (a){ => if (a) {
    'no-trailing-spaces': 'error', // No trailing spaces important!!
    'max-len': ['error', { 'code': 120 }], // limit max length
    // For Typescript
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
  },
  overrides: [
    {
      'files': ['*.html'],
      'processor': 'vue/.vue'
    }
  ]
}
