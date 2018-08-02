import React from 'react';
import Helmet from 'react-helmet';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { history } from '../../../app/services';
import configureStore from '../../../app/store';
import rootSaga from '../../../app/sagas';

import template from './template';

import settings from '../../../../configurations/application/settings';

import App from '../../../client';

export default function Application(request, response) {
  if (typeof window === 'undefined') {
    global.window = {};
  }
  const routerContext = {};
  const initialState = global.window.__INITIAL_STATE__;
  const store = configureStore(history, initialState);
  console.log('store: ', store);
  store.runSaga(rootSaga);
  const app = (<App store={store} history={history} />);

  response
    .status(200)
    .send(template({}, {}, '', ''));
}
