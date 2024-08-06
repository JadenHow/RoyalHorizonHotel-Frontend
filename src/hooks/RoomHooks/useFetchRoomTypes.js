import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchRoomTypesRequest } from 'features/room/roomSlice';

export default function useFetchRoomTypes() {
  const dispatch = useDispatch();

  const fetchRoomTypes = useCallback(() => {
    dispatch(fetchRoomTypesRequest());
  }, [dispatch]);

  return fetchRoomTypes;
};
