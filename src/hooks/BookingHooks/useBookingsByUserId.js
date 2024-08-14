import { useSelector } from 'react-redux';

export default function useBookingsByUserId() {
  const bookingsById = useSelector((state) => state.booking.userBookings);
  return bookingsById;
};
