import { useSelector } from 'react-redux';

export default function useRoomTypes() {
  const roomTypes = useSelector((state) => state.room.roomTypes);
  return roomTypes;
};
