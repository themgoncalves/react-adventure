/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.0.2
 */

/* eslint-disable global-require */
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./store.config.prod');
    break;
  case 'test':
  case 'testing':
    module.exports = require('./store.config.dev');
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./store.config.dev');
    break;
}
