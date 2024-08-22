import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { updateRoomRequest } from 'features/room/roomSlice';

export default function useUpdateRoom() {
  const dispatch = useDispatch();

  const updateRoom = useCallback(
    ({ roomId, oldImage, newImage, roomType, roomPrice }) => {
      dispatch(updateRoomRequest({ roomId, oldImage, newImage, roomType, roomPrice }));
    },
    [dispatch]
  );

  return updateRoom;
};
