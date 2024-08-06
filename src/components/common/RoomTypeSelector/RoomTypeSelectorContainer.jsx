import React, { useEffect } from 'react';
import RoomTypeSelector from './RoomTypeSelector';
import RoomHooks from 'hooks/RoomHooks';

const RoomTypeSelectorContainer = ({ handleRoomInputChange, newRoom }) => {
  const fetchRoomTypes = RoomHooks.useFetchRoomTypes();
  const roomTypes = RoomHooks.useRoomTypes();

  useEffect(() => {
    fetchRoomTypes();
  }, []);

  const allProps = {
    handleRoomInputChange,
    newRoom,
    roomTypes
  };

  return (
    <RoomTypeSelector {...allProps} />
  );
};

export default RoomTypeSelectorContainer;
