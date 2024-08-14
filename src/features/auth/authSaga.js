import { call, put, takeEvery } from 'redux-saga/effects';
import { postLoginFailure, postLoginSuccess, postRegisterFailure, postRegisterSuccess } from './authSlice';

function* workLogin(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(fetch, 'http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const responseBody = yield response.text();

    if (response.ok) {
      const parsedResponse = JSON.parse(responseBody);
      const jwtToken = parsedResponse.jwt;
      yield put(postLoginSuccess(jwtToken));
    } else {
      yield put(postLoginFailure(responseBody));
    }
  } catch (error) {
    console.error('Error logging in:', error);
    yield put(postLoginFailure());
  }
}

function* workRegister(action) {
  try {
    const { firstName, lastName, email, password } = action.payload;

    const response = yield call(fetch, 'http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password
      })
    });

    const responseBody = yield response.text();

    if (response.ok) {
      yield put(postRegisterSuccess());
    } else {
      yield put(postRegisterFailure(responseBody));
    }
  } catch (error) {
    console.error(error);
    yield put(postRegisterFailure());
  }
}

function* authSage() {
  yield takeEvery('auth/postLoginRequest', workLogin);
  yield takeEvery('auth/postRegisterRequest', workRegister);
}

export default authSage;
