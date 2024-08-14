import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { cancelBookingRequest } from 'features/booking/bookingSlice';

export default function useCancelBooking() {
  const dispatch = useDispatch();

  const cancelBooking = useCallback(
    ({ bookingId }) => {
      dispatch(cancelBookingRequest({ bookingId }));
    },
    [dispatch]
  );

  return cancelBooking;
};
