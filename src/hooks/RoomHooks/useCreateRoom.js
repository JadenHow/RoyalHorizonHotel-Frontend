import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createRoomRequest } from 'features/room/roomSlice';

export default function useCreateRoom() {
  const dispatch = useDispatch();

  const createRoom = useCallback(
    (room) => {
      dispatch(createRoomRequest(room));
    },
    [dispatch]
  );

  return createRoom;
};
