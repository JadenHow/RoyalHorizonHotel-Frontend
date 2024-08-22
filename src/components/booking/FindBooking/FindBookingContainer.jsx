import React from 'react';
import FindBooking from './FindBooking';
import BookingHooks from 'hooks/BookingHooks';

const FindBookingContainer = () => {
  const cancelBooking = BookingHooks.useCancelBooking();
  const fetchBookingByConfirmationCode = BookingHooks.useFetchBookingByConfirmationCode();
  const bookingByConfirmationCode = BookingHooks.useBookingByConfirmationCode();
  const bookingConfirmationCode = BookingHooks.useBookingConfirmationCode();
  const { isLoading, error } = BookingHooks.useBooking();

  const allProps = {
    cancelBooking,
    fetchBookingByConfirmationCode,
    bookingByConfirmationCode,
    bookingConfirmationCode,
    isLoading,
    error
  };

  return (
    <FindBooking {...allProps} />
  );
};

export default FindBookingContainer;
