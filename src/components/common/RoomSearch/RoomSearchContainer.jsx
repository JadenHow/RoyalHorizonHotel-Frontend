import React from 'react';
import RoomSearch from './RoomSearch';
import RoomHooks from 'hooks/RoomHooks';

const RoomSearchContainer = () => {
  const fetchAvailableRooms = RoomHooks.useFetchAvailableRooms();
  const availableRooms = RoomHooks.useAvailableRooms();

  const allProps = {
    fetchAvailableRooms,
    availableRooms
  };

  return (
    <RoomSearch {...allProps} />
  );
};

export default RoomSearchContainer;
