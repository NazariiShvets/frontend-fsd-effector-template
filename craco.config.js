const CracoAlias = require('craco-alias');
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@styles': path.resolve(__dirname, 'src/shared/ui/styles')
    }
  },

  style: {
    css: {
      loaderOptions: {
        modules: {
          auto: true,
          exportLocalsConvention: 'camelCaseOnly'
        }
      }
    }
  },

  babel: require('./babel.config.js'),

  plugins: [
    {
      plugin: CracoAlias,

      options: {
        source: 'tsconfig',
        baseUrl: '.',
        tsConfigPath: './tsconfig.paths.json'
      }
    }
  ]
};
