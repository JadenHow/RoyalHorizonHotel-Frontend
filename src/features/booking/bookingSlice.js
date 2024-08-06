import { createSlice } from '@reduxjs/toolkit';

export const bookingSlice = createSlice({
  name: 'bookings',
  initialState: {
    bookings: [],
    currentBooking: null,
    userBookings: [],
    confirmationCode: null,
    isLoading: false,
    error: null
  },
  reducers: {
    fetchBookingsRequest: (state) => {
      state.isLoading = true;
    },
    fetchBookingsSuccess: (state, action) => {
      state.bookings = action.payload;
      state.isLoading = false;
    },
    fetchBookingsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    saveBookingRequest: (state) => {
      state.isLoading = true;
    },
    saveBookingSuccess: (state, action) => {
      state.confirmationCode = action.payload;
      state.isLoading = false;
    },
    saveBookingFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchBookingByConfirmationCodeRequest: (state) => {
      state.isLoading = true;
    },
    fetchBookingByConfirmationCodeSuccess: (state, action) => {
      state.currentBooking = action.payload;
      state.isLoading = false;
    },
    fetchBookingByConfirmationCodeFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    fetchBookingsByUserIdRequest: (state) => {
      state.isLoading = true;
    },
    fetchBookingsByUserIdSuccess: (state, action) => {
      state.userBookings = action.payload;
      state.isLoading = false;
    },
    fetchBookingsByUserIdFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    cancelBookingRequest: (state) => {
      state.isLoading = true;
    },
    cancelBookingSuccess: (state, action) => {
      state.bookings = state.bookings.filter(booking => booking.id !== action.payload.id);
      state.isLoading = false;
    },
    cancelBookingFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const {
  fetchBookingsRequest,
  fetchBookingsSuccess,
  fetchBookingsFailure,
  saveBookingRequest,
  saveBookingSuccess,
  saveBookingFailure,
  fetchBookingByConfirmationCodeRequest,
  fetchBookingByConfirmationCodeSuccess,
  fetchBookingByConfirmationCodeFailure,
  fetchBookingsByUserIdRequest,
  fetchBookingsByUserIdSuccess,
  fetchBookingsByUserIdFailure,
  cancelBookingRequest,
  cancelBookingSuccess,
  cancelBookingFailure
} = bookingSlice.actions;

export default bookingSlice.reducer;
