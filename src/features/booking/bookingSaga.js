import { call, delay, put, takeEvery } from 'redux-saga/effects';
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
  cancelBookingSuccess,
  clearError
} from './bookingSlice';

function* workFetchBookings() {
  try {
    const response = yield call(fetch, 'https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/bookings');
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
    const { roomId, bookingRequest } = action.payload;
    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/bookings/room/${roomId}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bookingRequest)
    });

    const responseBody = yield response.text();

    if (response.ok) {
      yield put(saveBookingSuccess(responseBody));
      yield delay(3000);
      yield put(clearError());
    } else {
      yield put(saveBookingFailure(responseBody));
      yield delay(3000);
      yield put(clearError());
    }
  } catch (error) {
    console.error('Error saving booking:', error);
    yield put(saveBookingFailure());
  }
}

function* workFetchBookingByConfirmationCode(action) {
  try {
    const { confirmationCode } = action.payload;

    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/bookings/${confirmationCode}`);

    const responseBody = yield response.text();

    if (response.ok) {
      yield put(fetchBookingByConfirmationCodeSuccess(JSON.parse(responseBody)));
      yield delay(3000);
      yield put(clearError());
    } else {
      yield put(fetchBookingByConfirmationCodeFailure(responseBody));
      yield delay(3000);
      yield put(clearError());
    }
  } catch (error) {
    console.error('Error fetching booking by confirmation code:', error);
    yield put(fetchBookingByConfirmationCodeFailure());
  }
}

function* workFetchBookingsByUserId(action) {
  try {
    const { id } = action.payload;
    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/bookings/user/${id}`);
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
    const { bookingId } = action.payload;

    const response = yield call(fetch, `https://royalhorizonhotel-backend-s5k2dwd5ma-uc.a.run.app/api/bookings/${bookingId}`, {
      method: 'DELETE'
    });

    if (response.ok) {
      const cancelledBooking = yield response.json();
      yield put(cancelBookingSuccess(cancelledBooking));
      yield delay(3000);
      yield put(clearError());
    } else {
      yield put(cancelBookingFailure());
      yield delay(3000);
      yield put(clearError());
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
