switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./configuration/webpack/webpack.config.production');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./configuration/webpack/webpack.config.dev');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./configuration/webpack/webpack.config.dev');
}
