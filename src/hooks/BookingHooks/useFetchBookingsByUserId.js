import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchBookingsByUserIdRequest } from 'features/booking/bookingSlice';

export default function useFetchBookingsByUserId() {
  const dispatch = useDispatch();

  const fetchBookingsByUserId = useCallback(
    ({ id }) => {
      dispatch(fetchBookingsByUserIdRequest({ id }));
    },
    [dispatch]
  );

  return fetchBookingsByUserId;
};
