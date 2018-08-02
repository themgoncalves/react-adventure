/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import React from 'react';
import { hydrate } from 'react-dom';
import { history } from 'services';
import Root from 'screens/root';

// Import styles
import 'styles/reset.scss';
import 'styles/responsive-grid.scss';
import 'styles/base.scss';

// import './service-worker.register';
import configureStore from './app/store';
import rootSaga from './app/sagas';

const initialState = window.__INITIAL_STATE__;
delete window.__INITIAL_STATE__;

const store = configureStore(history, initialState);
store.runSaga(rootSaga);

hydrate(
  <Root
    store={store}
    history={history}
  />
  , document.getElementById('react-app'),
);
