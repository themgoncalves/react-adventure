/**
 * React Adventure
 * @author Marcos Gonçalves <contact@themgoncalves.com>
 * @version 2.2.0
 */

import { combineReducers } from 'redux';
import authReducer from './auth';

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
