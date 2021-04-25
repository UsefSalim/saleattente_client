import { takeLatest } from 'redux-saga/effects';
import { getLogin, ifLoged, getLogout } from '../slices/authSlice';
import { handelGetLogin, handelIfLoged, handelGetLogout } from './handlers/auth.handler';
import { addPatient, getUser } from '../slices/userSlice';
import { handelGetUser, handelAddPatient } from './handlers/user.handler';

export function* watcherSaga() {
  yield takeLatest(ifLoged.type, handelIfLoged);
  yield takeLatest(getLogin.type, handelGetLogin);
  yield takeLatest(getLogout.type, handelGetLogout);
  yield takeLatest(getUser.type, handelGetUser);
  yield takeLatest(addPatient.type, handelAddPatient);
}
