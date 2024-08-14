import useBooking from './useBooking';
import useFetchBookings from './useFetchBookings';
import useFetchBookingByConfirmationCode from './useFetchBookingByConfirmationCode';
import useFetchBookingsByUserId from './useFetchBookingsByUserId';
import useSaveBooking from './useSaveBooking';
import useCancelBooking from './useCancelBooking';
import useBookings from './useBookings';
import useBookingByConfirmationCode from './useBookingByConfirmationCode';
import useBookingsByUserId from './useBookingsByUserId';

export const BookingHooks = {
  useBooking,
  useFetchBookings,
  useFetchBookingByConfirmationCode,
  useFetchBookingsByUserId,
  useSaveBooking,
  useCancelBooking,
  useBookings,
  useBookingByConfirmationCode,
  useBookingsByUserId
};

export default BookingHooks;
