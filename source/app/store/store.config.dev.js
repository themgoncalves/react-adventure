/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';

// Mock function
/* eslint-disable func-names */
const mock = (fn) => {
  let returnValue;
  let called = false;

  return function (...args) {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, args);
    }
    return returnValue;
  };
};
/* eslint-enable func-names */

/* eslint-disable global-require */
export default function configureStore(history) {
  // Insert mocked function to avoid redux erros on safari
  /* eslint-disable no-underscore-dangle */
  const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : mock);
    /* eslint-enable no-underscore-dangle */

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(history),
        createLogger(),
      ),
      reduxDevTools && reduxDevTools,
    ),
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
/* eslint-enable global-require */
