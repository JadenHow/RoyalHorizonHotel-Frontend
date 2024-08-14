import RoomHooks from 'hooks/RoomHooks';
import React, { useEffect } from 'react';
import ExistingRooms from './ExistingRooms';

const ExistingRoomsContainer = () => {
  const fetchRooms = RoomHooks.useFetchRooms();
  const rooms = RoomHooks.useRooms();
  const deleteRoom = RoomHooks.useDeleteRoom();
  const { isLoading, error } = RoomHooks.useRoom();

  const allProps = {
    rooms,
    fetchRooms,
    deleteRoom,
    isLoading,
    error
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <ExistingRooms {...allProps} />
  );
};

export default ExistingRoomsContainer;
