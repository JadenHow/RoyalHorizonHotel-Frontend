import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { saveBookingRequest } from 'features/booking/bookingSlice';

export default function useSaveBooking() {
  const dispatch = useDispatch();

  const saveBooking = useCallback(
    ({ roomId, bookingRequest }) => {
      dispatch(saveBookingRequest({ roomId, bookingRequest }));
    },
    [dispatch]
  );

  return saveBooking;
};
