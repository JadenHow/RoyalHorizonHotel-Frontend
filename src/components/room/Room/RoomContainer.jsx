import RoomHooks from 'hooks/RoomHooks';
import React, { useEffect } from 'react';
import Room from './Room';

const RoomContainer = () => {
  const fetchRooms = RoomHooks.useFetchRooms();
  const rooms = RoomHooks.useRooms();
  const { isLoading } = RoomHooks.useRoom();

  const allProps = {
    rooms
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  if (isLoading) {
    return <p>Loading rooms...</p>;
  }

  return (
    <Room {...allProps} />
  );
};

export default RoomContainer;
