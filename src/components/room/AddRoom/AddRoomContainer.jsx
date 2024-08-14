import RoomHooks from 'hooks/RoomHooks';
import React from 'react';
import AddRoom from './AddRoom';

const AddRoomContainer = () => {
  const createRoom = RoomHooks.useCreateRoom();
  const { isLoading, error } = RoomHooks.useRoom();

  const allProps = {
    createRoom,
    isLoading,
    error
  };

  return (
    <AddRoom {...allProps} />
  );
};

export default AddRoomContainer;
