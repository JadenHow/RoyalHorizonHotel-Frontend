import { useSelector } from 'react-redux';

export default function useBookingByConfirmationCode() {
  const booking = useSelector((state) => state.booking.currentBooking);
  return booking;
};
