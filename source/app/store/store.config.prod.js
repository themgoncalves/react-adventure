/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';


export default function configureStore(history) {
  const store = createStore(
    rootReducer,
    compose(applyMiddleware(
      thunk,
      routerMiddleware(history),
    )),
  );

  return store;
}
