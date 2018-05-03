/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import React from 'react';
import ReactDOM from 'react-dom';

import { history } from './app/services';
import Root from './app/screens/root';
import configureStore from './app/store';

import './scss/responsive-grid.scss';

const store = configureStore(history);

ReactDOM.render(
  <Root
    store={store}
    history={history}
  />
  , document.getElementById('react-app'),
);
