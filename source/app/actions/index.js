import { AUTH_USER, UNAUTH_USER } from './types';

const authenticateUser = ({ email, password }) => {
  return {
    type: AUTH_USER.REQUEST,
    payload: {
      email,
      password,
    },
  };
};

const unauthenticateUser = () => {
  return {
    type: UNAUTH_USER
  };
};

export { authenticateUser, unauthenticateUser };
