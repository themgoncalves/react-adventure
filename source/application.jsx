/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { history } from 'services';
import Root from 'screens/root';
import configureStore from './app/store';

import 'styles/reset.scss';
import 'styles/responsive-grid.scss';
import 'styles/base.scss';

const store = configureStore(history);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />
  , document.getElementById('react-app'),
);
