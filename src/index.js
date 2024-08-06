import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRoot from '../src/layouts/AppRoot';

import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { configureStore } from '@reduxjs/toolkit';
import authReducer from 'features/auth/authSlice';
import authSaga from 'features/auth/authSaga';
import bookingReducer from 'features/booking/bookingSlice';
import bookingSaga from 'features/booking/bookingSaga';
import roomReducer from 'features/room/roomSlice';
import roomSaga from 'features/room/roomSaga';
import userReducer from 'features/user/userSlice';
import userSaga from 'features/user/userSaga';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    auth: authReducer,
    booking: bookingReducer,
    room: roomReducer,
    user: userReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(authSaga);
sagaMiddleware.run(bookingSaga);
sagaMiddleware.run(roomSaga);
sagaMiddleware.run(userSaga);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <AppRoot />
  </Provider>
);
