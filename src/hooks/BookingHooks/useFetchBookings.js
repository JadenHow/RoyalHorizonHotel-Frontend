import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchBookingsRequest } from 'features/booking/bookingSlice';

export default function useFetchBookings() {
  const dispatch = useDispatch();

  const fetchBookings = useCallback(() => {
    dispatch(fetchBookingsRequest());
  }, [dispatch]);

  return fetchBookings;
};
