import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchBookingsFailure,
  fetchBookingsSuccess,
  saveBookingFailure,
  saveBookingSuccess,
  fetchBookingByConfirmationCodeFailure,
  fetchBookingByConfirmationCodeSuccess,
  fetchBookingsByUserIdFailure,
  fetchBookingsByUserIdSuccess,
  cancelBookingFailure,
  cancelBookingSuccess
} from './bookingSlice';

function* workFetchBookings() {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/bookings');
    if (response.ok) {
      const bookings = yield response.json();
      yield put(fetchBookingsSuccess(bookings));
    } else {
      yield put(fetchBookingsFailure());
    }
  } catch (error) {
    console.error('Error fetching bookings:', error);
    yield put(fetchBookingsFailure());
  }
}

function* workSaveBooking(action) {
  try {
    const { roomId, bookingRequest, token } = action.payload;
    const response = yield call(fetch, `http://localhost:8080/api/bookings/room/${roomId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(bookingRequest)
    });

    if (response.ok) {
      const confirmationCode = yield response.text();
      yield put(saveBookingSuccess(confirmationCode));
    } else {
      yield put(saveBookingFailure());
    }
  } catch (error) {
    console.error('Error saving booking:', error);
    yield put(saveBookingFailure());
  }
}

function* workFetchBookingByConfirmationCode(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/bookings/${action.payload}`);
    if (response.ok) {
      const booking = yield response.json();
      yield put(fetchBookingByConfirmationCodeSuccess(booking));
    } else {
      yield put(fetchBookingByConfirmationCodeFailure());
    }
  } catch (error) {
    console.error('Error fetching booking by confirmation code:', error);
    yield put(fetchBookingByConfirmationCodeFailure());
  }
}

function* workFetchBookingsByUserId(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/bookings/user/${action.payload}`);
    if (response.ok) {
      const bookings = yield response.json();
      yield put(fetchBookingsByUserIdSuccess(bookings));
    } else {
      yield put(fetchBookingsByUserIdFailure());
    }
  } catch (error) {
    console.error('Error fetching bookings by user email:', error);
    yield put(fetchBookingsByUserIdFailure());
  }
}

function* workCancelBooking(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/bookings/${action.payload}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${action.payload.token}`
      }
    });

    if (response.ok) {
      const cancelledBooking = yield response.json();
      yield put(cancelBookingSuccess(cancelledBooking));
    } else {
      yield put(cancelBookingFailure());
    }
  } catch (error) {
    console.error('Error canceling booking:', error);
    yield put(cancelBookingFailure());
  }
}

function* bookingSaga() {
  yield takeEvery('bookings/fetchBookingsRequest', workFetchBookings);
  yield takeEvery('bookings/saveBookingRequest', workSaveBooking);
  yield takeEvery('bookings/fetchBookingByConfirmationCodeRequest', workFetchBookingByConfirmationCode);
  yield takeEvery('bookings/fetchBookingsByUserIdRequest', workFetchBookingsByUserId);
  yield takeEvery('bookings/cancelBookingRequest', workCancelBooking);
}

export default bookingSaga;
