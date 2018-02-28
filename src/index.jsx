/*
 * React App initial set-up
 * Created by Marcos Gonçalves <https://github.com/themgoncalves/>
 */

 //Import all Javascript related files first
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './app/reducers';
import Loadable from './app/hoc/loadable';

import 'expose-loader?Tether!tether';
import 'bootstrap';

const AsyncApp = Loadable({
  loader: () => import(/* webpackChunkName: "root" */ './app')
});

//Import all CSS related files
import './scss/bootstrap.scss';
import './scss/index.scss';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={AsyncApp} />
      </Switch>
    </BrowserRouter>
  </Provider>
  , document.getElementById('react-app'));
