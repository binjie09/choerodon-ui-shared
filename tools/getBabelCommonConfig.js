const runtimeVersion = require('@babel/runtime/package.json').version;

module.exports = function (modules) {
  const plugins = [
    [
      require.resolve('@babel/plugin-transform-typescript'),
      {
        isTSX: true,
      },
    ],
    // resolve('babel-plugin-inline-import-data-uri'),
    require.resolve('@babel/plugin-transform-member-expression-literals'),
    require.resolve('@babel/plugin-transform-object-assign'),
    require.resolve('@babel/plugin-transform-property-literals'),
    [require.resolve('@babel/plugin-transform-runtime'), { version: runtimeVersion }],
    require.resolve('@babel/plugin-transform-spread'),
    require.resolve('@babel/plugin-transform-template-literals'),
    require.resolve('@babel/plugin-proposal-export-default-from'),
    require.resolve('@babel/plugin-proposal-export-namespace-from'),
    require.resolve('@babel/plugin-proposal-object-rest-spread'),
    [
      require.resolve('@babel/plugin-proposal-decorators'),
      {
        legacy: true,
      },
    ],
    require.resolve('@babel/plugin-proposal-class-properties'),
  ];
  return {
    presets: [
      [
        require.resolve('@babel/preset-env'),
        {
          modules,
          targets: {
            browsers: [
              'last 2 versions',
              'Firefox ESR',
              '> 1%',
              'ie >= 9',
              'iOS >= 8',
              'Android >= 4',
            ],
          },
        },
      ],
    ],
    plugins,
  };
};
