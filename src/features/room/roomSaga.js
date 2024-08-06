import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchRoomsFailure,
  fetchRoomsSuccess,
  createRoomFailure,
  createRoomSuccess,
  updateRoomFailure,
  updateRoomSuccess,
  deleteRoomFailure,
  deleteRoomSuccess,
  fetchRoomByIdFailure,
  fetchRoomByIdSuccess,
  fetchAvailableRoomsFailure,
  fetchAvailableRoomsSuccess,
  fetchRoomTypesFailure,
  fetchRoomTypesSuccess
} from './roomSlice';

function* workFetchRooms() {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/rooms');
    if (response.ok) {
      const rooms = yield response.json();
      yield put(fetchRoomsSuccess(rooms));
    } else {
      yield put(fetchRoomsFailure());
    }
  } catch (error) {
    console.error('Error fetching rooms:', error);
    yield put(fetchRoomsFailure());
  }
}

function* workFetchRoomTypes() {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/rooms/types');
    if (response.ok) {
      const roomTypes = yield response.json();
      yield put(fetchRoomTypesSuccess(roomTypes));
    } else {
      yield put(fetchRoomTypesFailure());
    }
  } catch (error) {
    console.error('Error fetching room types:', error);
    yield put(fetchRoomTypesFailure());
  }
}

function* workCreateRoom(action) {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/rooms', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${action.payload.token}`
      },
      body: JSON.stringify(action.payload.room)
    });

    if (response.ok) {
      const newRoom = yield response.json();
      yield put(createRoomSuccess(newRoom));
    } else {
      yield put(createRoomFailure());
    }
  } catch (error) {
    console.error('Error creating room:', error);
    yield put(createRoomFailure());
  }
}

function* workUpdateRoom(action) {
  try {
    const { roomId, room, token } = action.payload;
    const response = yield call(fetch, `http://localhost:8080/api/rooms/${roomId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(room)
    });

    if (response.ok) {
      const updatedRoom = yield response.json();
      yield put(updateRoomSuccess(updatedRoom));
    } else {
      yield put(updateRoomFailure());
    }
  } catch (error) {
    console.error('Error updating room:', error);
    yield put(updateRoomFailure());
  }
}

function* workDeleteRoom(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/rooms/${action.payload.roomId}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${action.payload.token}`
      }
    });

    if (response.ok) {
      yield put(deleteRoomSuccess(action.payload.roomId));
    } else {
      yield put(deleteRoomFailure());
    }
  } catch (error) {
    console.error('Error deleting room:', error);
    yield put(deleteRoomFailure());
  }
}

function* workFetchRoomById(action) {
  try {
    const response = yield call(fetch, `http://localhost:8080/api/rooms/${action.payload}`);
    if (response.ok) {
      const room = yield response.json();
      yield put(fetchRoomByIdSuccess(room));
    } else {
      yield put(fetchRoomByIdFailure());
    }
  } catch (error) {
    console.error('Error fetching room by ID:', error);
    yield put(fetchRoomByIdFailure());
  }
}

function* workFetchAvailableRooms(action) {
  try {
    const response = yield call(fetch, 'http://localhost:8080/api/rooms/available', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(action.payload)
    });

    if (response.ok) {
      const availableRooms = yield response.json();
      yield put(fetchAvailableRoomsSuccess(availableRooms));
    } else {
      yield put(fetchAvailableRoomsFailure());
    }
  } catch (error) {
    console.error('Error fetching available rooms:', error);
    yield put(fetchAvailableRoomsFailure());
  }
}

function* roomSaga() {
  yield takeEvery('rooms/fetchRoomsRequest', workFetchRooms);
  yield takeEvery('rooms/fetchRoomTypesRequest', workFetchRoomTypes);
  yield takeEvery('rooms/createRoomRequest', workCreateRoom);
  yield takeEvery('rooms/updateRoomRequest', workUpdateRoom);
  yield takeEvery('rooms/deleteRoomRequest', workDeleteRoom);
  yield takeEvery('rooms/fetchRoomByIdRequest', workFetchRoomById);
  yield takeEvery('rooms/fetchAvailableRoomsRequest', workFetchAvailableRooms);
}

export default roomSaga;
