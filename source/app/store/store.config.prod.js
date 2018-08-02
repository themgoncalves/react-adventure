/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers';


export default function configureStore(history, initialState = {}) {
  const sagaMiddleware = typeof createSagaMiddleware === 'function' ? createSagaMiddleware() : createSagaMiddleware.default();

  const store = createStore(
    connectRouter(history)(rootReducer),
    initialState,
    compose(applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    )),
  );

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);

  return store;
}
