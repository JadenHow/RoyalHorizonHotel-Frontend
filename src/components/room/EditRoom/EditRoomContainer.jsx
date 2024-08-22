import RoomHooks from 'hooks/RoomHooks';
import React, { useEffect } from 'react';
import EditRoom from './EditRoom';
import { useParams } from 'react-router-dom';

const EditRoomContainer = () => {
  const updateRoom = RoomHooks.useUpdateRoom();
  const fetchRoomById = RoomHooks.useFetchRoomById();
  const roomById = RoomHooks.useRoomById();
  const { roomId } = useParams();
  const { isLoading, error } = RoomHooks.useRoom();

  const allProps = {
    updateRoom,
    fetchRoomById,
    roomById,
    isLoading,
    error
  };

  useEffect(() => {
    fetchRoomById({ roomId });
  }, [roomId]);

  return (
    <EditRoom {...allProps} />
  );
};

export default EditRoomContainer;
