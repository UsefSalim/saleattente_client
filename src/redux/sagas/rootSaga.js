import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged } from '../slices/authSlice';
import { handelGetLogin, handelIfLoged } from './handlers/auth.handler';

export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
}
