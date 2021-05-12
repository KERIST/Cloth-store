import { put, takeLatest, all, call } from 'redux-saga/effects';

import userTypes from './user.types';
import { signInWithEmailSuccess, signInWithEmailFailure, registrationWithEmailSuccess, registrationWithEmailFailure } from './user.actions';

export function* signInWithEmailAsync({ payload: { email, password } }) {
  try {
    const response = yield fetch('/api/signin', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    });

    if(response.status === 200) {
      const user = yield response.json();
  
      yield put(signInWithEmailSuccess(user));
    } else {
      yield put(signInWithEmailFailure('Incorrect email or password'));
    }
  } catch(error) {
    yield put(signInWithEmailFailure(error));
  }
}

export function* registrationWithEmailAsync({ payload: { name, email, password }}) {
  try {
    const response = yield fetch('/api/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    }).then(data => data.json());

    if('error' in response) {
      yield put(registrationWithEmailFailure(response.error));
    } else {
      yield put(registrationWithEmailSuccess(response));
    }
  } catch(error) {
    yield put(registrationWithEmailFailure(error.message));
  }
}

export function* onSignInWithEmailStart() {
  yield takeLatest(userTypes.SIGNIN_EMAIL_START, signInWithEmailAsync);
}

export function* onReginstrationWithEmailStart() {
  yield takeLatest(userTypes.REGISTRATION_EMAIL_START, registrationWithEmailAsync);
}

export function* userSagas() {
  yield all([
    call(onSignInWithEmailStart),
    call(onReginstrationWithEmailStart)
  ]);
}