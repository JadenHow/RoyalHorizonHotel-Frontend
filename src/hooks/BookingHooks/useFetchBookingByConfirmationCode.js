import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchBookingByConfirmationCodeRequest } from 'features/booking/bookingSlice';

export default function useFetchBookingByConfirmationCode() {
  const dispatch = useDispatch();

  const fetchBookingByConfirmationCode = useCallback(
    ({ confirmationCode }) => {
      dispatch(fetchBookingByConfirmationCodeRequest({ confirmationCode }));
    },
    [dispatch]
  );

  return fetchBookingByConfirmationCode;
};
