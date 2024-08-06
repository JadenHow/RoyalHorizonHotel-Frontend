import { useSelector } from 'react-redux';

export function useBookings() {
  const bookings = useSelector((state) => state.bookings.bookings);
  return bookings;
};
