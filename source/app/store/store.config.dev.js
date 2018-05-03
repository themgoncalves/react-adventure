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

/* eslint-disable func-names */
// Mock function
const mock = (fn) => {
  let returnValue;
  let called = false;

  return function () {
    if (!called) {
      called = true;
      returnValue = fn.apply(this, arguments);
    }
    return returnValue;
  };
};
/* eslint-enable func-names */

export default function configureStore(history) {
  // Insert mocked function to avoid redux erros on safari
  const reduxDevTools = (window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : mock);

  const store = createStore(
    rootReducer,
    compose(applyMiddleware(
      thunk,
      routerMiddleware(history),
      createLogger(),
    ),
    reduxDevTools && reduxDevTools),
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
