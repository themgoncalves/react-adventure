/*
 * React App initial set-up
 * Created by Marcos Gonçalves <https://github.com/themgoncalves/>
 */

 //Import all Javascript related files first
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import reducers from './app/reducers';
import Loadable from './app/hoc/loadable';

import 'expose-loader?Tether!tether';
import 'bootstrap';

const history = createHistory();

const AsyncApp = Loadable({
  loader: () => import(/* webpackChunkName: "root" */ './app')
});

//Import all CSS related files
import './scss/bootstrap.scss';
import './scss/index.scss';

const createStoreWithMiddleware = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(thunk, routerMiddleware(history))
);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <ConnectedRouter history={history}>
      <React.Fragment>
        <Route path="/" component={AsyncApp} />
      </React.Fragment>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('react-app'));
