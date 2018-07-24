/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.1.0
 */

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
  router: routerReducer,
});

export default rootReducer;
