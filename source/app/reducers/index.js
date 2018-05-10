/**
 * React Redux Async starter kit
 * @author Marcos Gonçalves <marx_souza@yahoo.com.br>
 * @version 2.0.1
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  user: (state = {}) => state,
  router: routerReducer,
});

export default rootReducer;
