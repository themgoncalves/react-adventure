/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.1
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { history } from 'utils';
import Root from 'screens/root';

// Import styles
import 'styles/reset.scss';
import 'styles/responsive-grid.scss';
import 'styles/base.scss';

import configureStore from 'state/store';
import rootSaga from 'state/sagas';

import './service-worker.register';

const store = configureStore(history);
store.runSaga(rootSaga);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />
  , document.getElementById('react-app'),
);
