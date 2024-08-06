import { useSelector } from 'react-redux';

export function useBookingByConfirmationCode() {
  const booking = useSelector((state) => state.bookings.currentBooking);
  return booking;
};
