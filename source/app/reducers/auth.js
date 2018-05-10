import {
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types';

const defaultState =  {
  message: '',
  isAuthenticated: false,
};

export default function(state = defaultState, action) {
  switch(action.type) {
    case AUTH_USER:
      return { ...state, isAuthenticated: true };
    case UNAUTH_USER:
      return { ...state, isAuthenticated: false };
  }

  return state;
}
