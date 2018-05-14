import { AUTH_USER, UNAUTH_USER } from './types';

const authenticateUser = ({ email, password }) => ({
  type: AUTH_USER.REQUEST,
  payload: {
    email,
    password,
  },
});

const unauthenticateUser = () => ({
  type: UNAUTH_USER,
});

export { authenticateUser, unauthenticateUser };
