import { takeLatest } from 'redux-saga/effects';

// import request from 'utils/request';
import { SIGNIN } from './constants';

export function* handleSignin(action) {
  // const requestURL = ``;
  // try {
  //   const user = yield call(request, requestURL);
  //   yield put(reposLoaded(user));
  // } catch (err) {
  //   yield put(repoLoadingError(err));
  // }
  // eslint-disable-next-line no-console

  const { email, history } = action;
  if (email === 'user1@abc.com') history.push('/');
  if (email === 'user2@abc.com') history.push('/home2');
  if (email === 'user3@abc.com') history.push('/home3');
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchSignin() {
  yield takeLatest(SIGNIN, handleSignin);
}
