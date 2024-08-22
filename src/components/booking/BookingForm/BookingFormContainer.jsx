import BookingHooks from 'hooks/BookingHooks';
import React from 'react';
import BookingForm from './BookingForm';
import RoomHooks from 'hooks/RoomHooks';

const BookingFormContainer = ({ roomById }) => {
  const saveBooking = BookingHooks.useSaveBooking();
  const bookingConfirmationCode = BookingHooks.useBookingConfirmationCode();
  const fetchRoomById = RoomHooks.useFetchRoomById();
  const { isLoading, error } = BookingHooks.useBooking();

  const allProps = {
    saveBooking,
    bookingConfirmationCode,
    fetchRoomById,
    roomById,
    isLoading,
    error
  };

  return (
    <BookingForm {...allProps} />
  );
};

export default BookingFormContainer;
