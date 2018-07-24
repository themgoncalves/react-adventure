switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./configurations/webpack/config.production');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./configurations/webpack/config.dev');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./configurations/webpack/config.dev');
}
