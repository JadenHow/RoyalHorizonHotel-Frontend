import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  fetchUserByEmailFailure,
  fetchUserByEmailSuccess,
  deleteUserFailure,
  deleteUserSuccess
} from './userSlice';

function* workFetchUsers(action) {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/users', {
      headers: {
        Authorization: `Bearer ${action.payload.token}`
      }
    });
    if (response.ok) {
      const users = yield response.json();
      yield put(fetchUsersSuccess(users));
    } else {
      yield put(fetchUsersFailure());
    }
  } catch (error) {
    console.error('Error fetching users:', error);
    yield put(fetchUsersFailure());
  }
}

function* workFetchUserByEmail(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/users/${action.payload.email}`, {
      headers: {
        Authorization: `Bearer ${action.payload.token}`
      }
    });
    if (response.ok) {
      const user = yield response.json();
      yield put(fetchUserByEmailSuccess(user));
    } else {
      yield put(fetchUserByEmailFailure());
    }
  } catch (error) {
    console.error('Error fetching user by email:', error);
    yield put(fetchUserByEmailFailure());
  }
}

function* workDeleteUser(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/users/${action.payload.userId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${action.payload.token}`
      }
    });
    if (response.ok) {
      const deletedUser = yield response.json();
      yield put(deleteUserSuccess(deletedUser));
    } else {
      yield put(deleteUserFailure());
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    yield put(deleteUserFailure());
  }
}

function* userSaga() {
  yield takeEvery('users/fetchUsersRequest', workFetchUsers);
  yield takeEvery('users/fetchUserByEmailRequest', workFetchUserByEmail);
  yield takeEvery('users/deleteUserRequest', workDeleteUser);
}

export default userSaga;
