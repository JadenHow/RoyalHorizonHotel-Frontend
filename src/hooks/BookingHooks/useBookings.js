import { useSelector } from 'react-redux';

export default function useBookings() {
  const bookings = useSelector((state) => state.booking.bookings);
  return bookings;
};
