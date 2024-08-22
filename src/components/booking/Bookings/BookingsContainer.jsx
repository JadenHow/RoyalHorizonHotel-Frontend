import BookingHooks from 'hooks/BookingHooks';
import React, { useEffect } from 'react';
import Bookings from './Bookings';

const BookingsContainer = () => {
  const cancelBooking = BookingHooks.useCancelBooking();
  const fetchBookings = BookingHooks.useFetchBookings();
  const bookings = BookingHooks.useBookings();
  const { isLoading, error } = BookingHooks.useBooking();

  useEffect(() => {
    fetchBookings();
  }, []);

  const allProps = {
    bookings,
    fetchBookings,
    cancelBooking,
    isLoading,
    error
  };

  return (
    <Bookings {...allProps} />
  );
};

export default BookingsContainer;
