import { useSelector } from 'react-redux';

export default function useBooking() {
  const booking = useSelector((state) => state.booking);
  return booking;
};
