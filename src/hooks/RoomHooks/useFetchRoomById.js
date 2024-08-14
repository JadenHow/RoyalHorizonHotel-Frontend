import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { fetchRoomByIdRequest } from 'features/room/roomSlice';

export default function useFetchRoomById() {
  const dispatch = useDispatch();

  const fetchRoomById = useCallback(
    ({ roomId }) => {
      dispatch(fetchRoomByIdRequest({ roomId }));
    },
    [dispatch]
  );

  return fetchRoomById;
};
