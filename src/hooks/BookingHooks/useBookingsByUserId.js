import { useSelector } from 'react-redux';

export function useBookingsByUserId() {
  const bookingsById = useSelector((state) => state.bookings.bookingsById);
  return bookingsById;
};
