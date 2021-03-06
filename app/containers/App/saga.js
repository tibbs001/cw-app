// auth sagas live here
import { put, call, takeEvery } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import client from 'utils/client';
import {
  SESSION_CHECKED,
  RELOAD_SESSION,
} from './constants';
import { SEARCH_CHANGED } from '../SearchPage/constants';

export function* checkSession() {
  const { data } = yield call(client.get, '/user/exists');
  yield put({ type: SESSION_CHECKED, data });
}

export function* handleSearchChange(data) {
  yield put(push(`/search/${data.searchQuery}`));
}

export default function* defaultSaga() {
  yield call(checkSession);
  yield takeEvery(RELOAD_SESSION, checkSession);
  yield takeEvery(SEARCH_CHANGED, handleSearchChange);
}
