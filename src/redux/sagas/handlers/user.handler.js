/* eslint-disable no-console */
import { call, put } from 'redux-saga/effects';
import { userRequest, addPatientRequest } from '../requests/user.request';
import { setUser } from '../../slices/userSlice';

export function* handelGetUser(action) {
  try {
    const { data } = yield call(userRequest, action);
    if (data) {
      yield put(setUser(data));
    }
  } catch (error) {
    if (error.response) console.log(error.response.data);
  }
}
export function* handelAddPatient(action) {
  try {
    const { data } = yield call(addPatientRequest, action);
    if (data) {
      // yield put(setUser(data));
      console.log(data);
    }
  } catch (error) {
    if (error.response) console.log(error.response.data);
  }
}
