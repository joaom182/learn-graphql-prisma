module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-typescript'],
    ['babel-plugin-transform-typescript-metadata'],
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties'],
    [
      'module-resolver',
      {
        alias: {
          '~/': './src/',
          '~prisma': './src/prisma',
          '~configs': './src/configs',
          '~modules': './src/modules',
        },
      },
    ],
  ],
  ignore: ['**/*.spec.ts', '**/prisma/**/*.d.ts'],
};
