/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Application from './middleware/application';
import settings from '../../configurations/application/settings';
import logger from './utils/logger';

const server = express();

server.disable('x-powered-by');

server.use(cors());
server.use(bodyParser.json());

//server.use(express.static(settings.ssr.server.staticFilesPath));

server.get('*', (request, response) => {
  logger({
    title: 'Request',
    level: 'special',
    message: `Received for "${request.url}"`,
  });
  return Application(request, response);
});

const listener = server.listen(settings.ssr.server.port, () =>
  logger({
    title: 'server',
    level: 'special',
    message: `
      ✓ ${settings.title} is ready!
      ---
      
      Service Workers: ${settings.pwa.enabled ? 'enabled' : 'disabled'}
      Server is now listening on Port ${settings.ssr.server.port}
      You can access it in the browser at http://${settings.ssr.server.host}:${settings.ssr.server.port}
      Press Ctrl-C to stop.
    `,
  }));

export default listener;
