import { call, delay, put, takeEvery } from 'redux-saga/effects';
import { clearError, postLoginFailure, postLoginSuccess, postRegisterFailure, postRegisterSuccess, logout } from './authSlice';

function* workLogin(action) {
  try {
    const { email, password } = action.payload;

    const response = yield call(fetch, 'https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/auth/login', {
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
      yield delay(3000);
      yield put(clearError());
    } else {
      yield put(postLoginFailure(responseBody));
      yield delay(3000);
      yield put(clearError());
    }
  } catch (error) {
    console.error('Error logging in:', error);
    yield put(postLoginFailure());
  }
}

function* workRegister(action) {
  try {
    const { firstName, lastName, email, password } = action.payload;

    const response = yield call(fetch, 'https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        admin: true
      })
    });

    const responseBody = yield response.text();

    if (response.ok) {
      yield put(postRegisterSuccess());
      yield delay(3000);
      yield put(clearError());
    } else {
      yield put(postRegisterFailure(responseBody));
      yield delay(3000);
      yield put(clearError());
    }
  } catch (error) {
    console.error(error);
    yield put(postRegisterFailure());
  }
}

function* workLogout() {
  yield put(logout());
}

function* authSage() {
  yield takeEvery('auth/postLoginRequest', workLogin);
  yield takeEvery('auth/postRegisterRequest', workRegister);
  yield takeEvery('auth/postLogoutRequest', workLogout);
}

export default authSage;
