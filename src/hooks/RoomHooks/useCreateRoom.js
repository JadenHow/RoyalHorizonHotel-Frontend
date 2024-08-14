import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { createRoomRequest } from 'features/room/roomSlice';

export default function useCreateRoom() {
  const dispatch = useDispatch();

  const createRoom = useCallback(
    ({ image, roomType, roomPrice }) => {
      dispatch(createRoomRequest({ image, roomType, roomPrice }));
    },
    [dispatch]
  );

  return createRoom;
};
