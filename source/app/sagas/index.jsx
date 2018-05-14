import { all } from 'redux-saga/effects';
import AuthSaga from './auth';

export default function* root() {
  yield all([
    AuthSaga(),
  ]);
}
