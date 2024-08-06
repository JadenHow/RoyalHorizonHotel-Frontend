import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchRoomsRequest } from 'features/room/roomSlice';

export default function useFetchRooms() {
  const dispatch = useDispatch();

  const fetchRooms = useCallback(() => {
    dispatch(fetchRoomsRequest());
  }, [dispatch]);

  return fetchRooms;
};
