
import { push } from 'react-router-redux';
import {
  AUTH_USER,
  UNAUTH_USER,
} from './types';


export function signinUser() {
  return function (dispatch) { // eslint-disable-line func-names
    dispatch({ type: AUTH_USER });
    dispatch(push('/'));
  };
}

export function signoutUser() {
  return { type: UNAUTH_USER };
}
