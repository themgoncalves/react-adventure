/**
 * React Adventure
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { history } from 'services';
import Root from 'screens/root';

// Import styles
import 'styles/reset.scss';
import 'styles/responsive-grid.scss';
import 'styles/base.scss';

import configureStore from './app/store';
import rootSaga from './app/sagas';


const store = configureStore(history);
store.runSaga(rootSaga);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />
  , document.getElementById('react-app'),
);
