import {
  AUTH_USER,
  UNAUTH_USER,
} from './types';
import { push } from 'react-router-redux';


export function signinUser({ email, password }) {
  return function(dispatch) {
    dispatch({ type: AUTH_USER });
  }
}

export function signoutUser() {
  return { type: UNAUTH_USER };
}