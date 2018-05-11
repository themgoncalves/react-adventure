import {
  AUTH_USER,
  UNAUTH_USER,
} from '../actions/types';

const defaultState = {
  requesting: false,
  successful: false,
  messages: [],
  errors: [],
  isAuthenticated: false,
};

export default function (state = defaultState, action) {
  switch (action.type) {
    case AUTH_USER.REQUEST:
      return {
        ...state,
        requesting: true,
        successful: false,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
        isAuthenticated: false,
      };

    case AUTH_USER.SUCCESS:
      return {
        ...state,
        requesting: false,
        successful: true,
        messages: [{ body: 'Logging in...', time: new Date() }],
        errors: [],
        isAuthenticated: true,
      };

    case AUTH_USER.FAILURE:
      return {
        ...state,
        requesting: false,
        successful: false,
        messages: [],
        errors: state.errors.concat([{
          body: action.error.toString(),
          time: new Date(),
        }]),
        isAuthenticated: false,
      };

    case UNAUTH_USER:
      return { ...state, isAuthenticated: false };

    default:
      return state;
  }
}
