module.exports = function (api) {
  api.cache(false);

  const presets = [
    [
      '@babel/preset-env',
      {
        'modules': 'commonjs',
        'targets': {
          'node': 'current'
        }
      }
    ],
    [
      '@babel/preset-react'
    ]
  ];
  const plugins = [
    [
      '@babel/plugin-proposal-decorators',
      {
        'legacy': true
      }
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        'loose': true
      }
    ],
    [
      '@babel/plugin-proposal-object-rest-spread'
    ]
  ];

  return {
    presets,
    plugins
  };
}