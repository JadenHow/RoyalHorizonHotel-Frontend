import { useSelector } from 'react-redux';

export default function useBookingConfirmationCode() {
  const booking = useSelector((state) => state.booking.confirmationCode);
  return booking;
};
