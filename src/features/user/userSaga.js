import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchUsersFailure,
  fetchUsersSuccess,
  fetchUserByIdFailure,
  fetchUserByIdSuccess,
  deleteUserFailure,
  deleteUserSuccess
} from './userSlice';

function* workFetchUsers(action) {
  try {
    const response = yield call(fetch, 'https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/users', {
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

function* workFetchUserById(action) {
  try {
    const { id } = action.payload;

    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/users/email/${id}`);
    if (response.ok) {
      const user = yield response.json();
      yield put(fetchUserByIdSuccess(user));
    } else {
      yield put(fetchUserByIdFailure());
    }
  } catch (error) {
    console.error('Error fetching user by email:', error);
    yield put(fetchUserByIdFailure());
  }
}

function* workDeleteUser(action) {
  try {
    const { id } = action.payload;

    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/users/${id}`, {
      method: 'DELETE'
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
  yield takeEvery('users/fetchUserByIdRequest', workFetchUserById);
  yield takeEvery('users/deleteUserRequest', workDeleteUser);
}

export default userSaga;
