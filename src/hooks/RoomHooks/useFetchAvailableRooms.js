import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchAvailableRoomsRequest } from 'features/room/roomSlice';

export default function useFetchAvailableRooms() {
  const dispatch = useDispatch();

  const fetchAvailableRooms = useCallback(
    ({ checkInDate, checkOutDate, roomType }) => {
      dispatch(fetchAvailableRoomsRequest({ checkInDate, checkOutDate, roomType }));
    },
    [dispatch]
  );

  return fetchAvailableRooms;
};
