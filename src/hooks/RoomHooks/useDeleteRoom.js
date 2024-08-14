import { useDispatch } from 'react-redux';
import { useCallback } from 'react';
import { deleteRoomRequest } from 'features/room/roomSlice';

export default function useDeleteRoom() {
  const dispatch = useDispatch();

  const deleteRoom = useCallback(
    ({ roomId, oldImage }) => {
      dispatch(deleteRoomRequest({ roomId, oldImage }));
    },
    [dispatch]
  );

  return deleteRoom;
};
