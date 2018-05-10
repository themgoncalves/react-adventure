
import { push } from 'react-router-redux';
import {
  AUTH_USER,
  UNAUTH_USER,
} from './types';


export function signinUser({ email, password }) {
  return function(dispatch) {
    dispatch({ type: AUTH_USER });
    dispatch(push('/'));
  }
}

export function signoutUser() {
  return { type: UNAUTH_USER };
}
