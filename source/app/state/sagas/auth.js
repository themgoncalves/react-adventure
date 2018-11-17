import { take, fork, cancel, call, put, cancelled } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { AUTH_USER, UNAUTH_USER } from '../actions/types';

function* logout() {
  yield put(UNAUTH_USER);
  yield put(push('/login'));
}

function* login(email, password) { // eslint-disable-line no-unused-vars
  try {
    yield put({ type: AUTH_USER.SUCCESS });
    yield put(push('/'));
  } catch (err) {
    yield put({ type: AUTH_USER.FAILURE, err });
  } finally {
    if (yield cancelled()) {
      yield put(push('/login'));
    }
  }
}

function* watcherLogin() {
  while (true) {
    const { payload: { email, password } } = yield take(AUTH_USER.REQUEST);
    const task = yield fork(login, email, password);
    const action = yield take([UNAUTH_USER, AUTH_USER.FAILURE]);

    if (action.type === UNAUTH_USER) yield cancel(task);

    yield call(logout);
  }
}

export default watcherLogin;
