import { call, put, takeEvery } from 'redux-saga/effects';
import { postLoginFailure, postLoginSuccess, postRegisterFailure, postRegisterSuccess } from './authSlice';

function* workLogin(action) {
  try {
    const { username, password } = action.payload;

    const response = yield call(fetch, 'http://localhost:8080/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
    });

    if (response.ok) {
      const { token } = yield response.json();
      yield put(postLoginSuccess(token));
    } else {
      yield put(postLoginFailure());
    }
  } catch (error) {
    console.error('Error logging in:', error);
    yield put(postLoginFailure());
  }
}

function* workRegister(action) {
  try {
    const { firstname, lastname, email, password } = action.payload;

    const response = yield call(fetch, 'http://localhost:8080/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstname,
        lastName: lastname,
        email,
        password
      })
    });

    if (response.ok) {
      yield put(postRegisterSuccess());
    } else {
      yield put(postRegisterFailure());
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
