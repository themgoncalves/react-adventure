const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

function createRequestTypes(base) {
  return [REQUEST, SUCCESS, FAILURE].reduce((acc, type) => {
    acc[type] = `${base}_${type}`;
    return acc;
  }, {});
}

export const USER = createRequestTypes('USER');

export const NAVIGATE = 'NAVIGATE';
export const AUTH_USER = createRequestTypes('AUTH_USER');
export const UNAUTH_USER = 'UNAUTH_USER';
