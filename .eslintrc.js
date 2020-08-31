const eslintrc = {
  extends: [
    'airbnb',
    'prettier',
    'plugin:jest/recommended',
    'plugin:react/recommended',
    'plugin:import/typescript',
    'prettier/react',
  ],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true,
  },
  settings: {
    react: {
      version: '16.9',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['markdown', 'react', 'babel', 'jest', '@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }],
        'no-unused-vars': [2, { argsIgnorePattern: '^_' }],
      },
    },
  ],
  rules: {
    'arrow-body-style': 0,
    'class-methods-use-this': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'consistent-return': 0,
    'func-names': 0,
    'function-paren-newline': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-cycle': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/anchor-has-content': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/label-has-associated-control': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/no-noninteractive-element-interact': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'max-classes-per-file': 0,
    'max-len': 0,
    'no-console': [2, { allow: ['warn', 'error'] }],
    'no-continue': 0,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-redeclare': 0,
    'no-restricted-globals': 0,
    'no-return-assign': 0,
    'no-underscore-dangle': 0,
    'object-curly-newline': 0,
    'prefer-destructuring': 0,
    'react/display-name': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-first-prop-new-line': 0,
    'react/jsx-fragments': 0, // TODO: remove later
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-props-no-spreading': 0,
    'react/no-danger': 0,
    'react/no-deprecated': 0,
    'react/no-find-dom-node': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/require-extension': 0,
    'react/sort-comp': 0,
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
  },
};

if (process.env.RUN_ENV === 'DEMO') {
  eslintrc.globals = {
    React: true,
    ReactDOM: true,
    mountNode: true,
  };

  Object.assign(eslintrc.rules, {
    indent: 0,
    'no-console': 0,
    'no-plusplus': 0,
    'eol-last': 0,
    'no-script-url': 0,
    'prefer-rest-params': 0,
    'react/no-access-state-in-setstate': 0,
    'react/destructuring-assignment': 0,
    'react/no-multi-comp': 0,
    'jsx-a11y/href-no-hash': 0,
    'import/no-extraneous-dependencies': 0,
    'import/no-unresolved': 0,
    'jsx-a11y/control-has-associated-label': 0,
  });
}

module.exports = eslintrc;
