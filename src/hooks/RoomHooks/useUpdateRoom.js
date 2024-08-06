import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateRoomRequest } from 'features/room/roomSlice';

export default function useUpdateRoom() {
  const dispatch = useDispatch();

  const updateRoom = useCallback(
    (roomId, room) => {
      dispatch(updateRoomRequest({ roomId, room }));
    },
    [dispatch]
  );

  return updateRoom;
};
